use std::time::Duration;

use neon::prelude::*;

pub struct Times {
    md5: (Duration, String),
    sha1: (Duration, String),
    sha256: (Duration, String),
    sha512: (Duration, String),
}

fn compute_time<T>(f: impl Fn() -> T, duration: Duration) -> (Duration, T) {
    let now = std::time::Instant::now();
    let end = now + duration;
    let mut count = 0;
    while end > std::time::Instant::now() {
        for _ in 0..10 {
            let _r = std::hint::black_box(f());
        }
        count += 10;
    }
    let elapsed = now.elapsed();
    let duration = elapsed / count;
    (duration, f())
}

fn compute_algorithm_times(buf: &[u8], mut duration: Duration) -> Times {
    duration /= 4;

    let sha1 = compute_time(
        || {
            use sha1::Digest;
            let mut sha1 = sha1::Sha1::new();
            std::hint::black_box(sha1.update(buf));
            std::hint::black_box(sha1.finalize())
        },
        duration,
    );
    let md5 = compute_time(|| md5::compute(buf), duration);

    let sha256 = compute_time(
        || {
            use sha2::Digest;
            let mut sha256 = sha2::Sha256::new();
            std::hint::black_box(sha256.update(buf));
            std::hint::black_box(sha256.finalize())
        },
        duration,
    );

    let sha512 = compute_time(
        || {
            use sha2::Digest;
            let mut sha512 = sha2::Sha512::new();
            std::hint::black_box(sha512.update(buf));
            std::hint::black_box(sha512.finalize())
        },
        duration,
    );

    Times {
        md5: (md5.0, hex::encode(md5.1.as_slice())),
        sha1: (sha1.0, hex::encode(sha1.1.as_slice())),
        sha256: (sha256.0, hex::encode(sha256.1.as_slice())),
        sha512: (sha512.0, hex::encode(sha512.1.as_slice())),
    }
}

fn compute_time_node(mut cx: FunctionContext) -> JsResult<JsPromise> {
    let time = cx.argument::<JsNumber>(1)?.value(&mut cx);
    let buf = cx.argument::<JsString>(0)?.value(&mut cx);
    let (deferred, promise) = cx.promise();
    let channel = cx.channel();

    rayon::spawn(move || {
        let buf = buf.as_bytes();
        let Times {
            md5: (md5, md5_hash),
            sha1: (sha1, sha1_hash),
            sha256: (sha256, sha256_hash),
            sha512: (sha512, sha512_hash),
        } = compute_algorithm_times(buf, Duration::from_millis(time as u64));
        deferred.settle_with(&channel, move |mut cx| {
            let obj = cx.empty_object();

            let md5 = cx.number(md5.as_secs_f64() * 1000.);
            obj.set(&mut cx, "md5", md5)?;

            let md5_hash = cx.string(md5_hash);
            obj.set(&mut cx, "md5Hash", md5_hash)?;

            let sha1 = cx.number(sha1.as_secs_f64() * 1000.);
            obj.set(&mut cx, "sha1", sha1)?;

            let sha1_hash = cx.string(sha1_hash);
            obj.set(&mut cx, "sha1Hash", sha1_hash)?;

            let sha256 = cx.number(sha256.as_secs_f64() * 1000.);
            obj.set(&mut cx, "sha256", sha256)?;

            let sha256_hash = cx.string(sha256_hash);
            obj.set(&mut cx, "sha256Hash", sha256_hash)?;

            let sha512 = cx.number(sha512.as_secs_f64() * 1000.);
            obj.set(&mut cx, "sha512", sha512)?;

            let sha512_hash = cx.string(sha512_hash);
            obj.set(&mut cx, "sha512Hash", sha512_hash)?;
            Ok(obj)
        });
    });
    Ok(promise)
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("computeTime", compute_time_node)?;
    Ok(())
}
