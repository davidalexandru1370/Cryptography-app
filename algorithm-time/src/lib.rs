use std::time::Duration;

use neon::prelude::*;

pub struct Times {
    md5: Duration,
    sha1: Duration,
    sha256: Duration,
    sha512: Duration,
}

fn compute_time<T>(f: impl Fn() -> T, duration: Duration) -> Duration {
    let now = std::time::Instant::now();
    let end = now + duration;
    let mut count = 0;
    while end > std::time::Instant::now() {
        for _ in 0..100 {
            let _r = std::hint::black_box(f());
        }
        count += 100;
    }
    let elapsed = now.elapsed();
    let duration = elapsed / count;
    duration
}

fn compute_algorithm_times(buf: &[u8], mut duration: Duration) -> Times {
    duration /= 4;
    let md5 = compute_time(|| md5::compute(buf), duration);

    let sha1 = compute_time(
        || {
            use sha1::Digest;
            let mut sha1 = sha1::Sha1::new();
            sha1.update(buf);
            sha1.finalize()
        },
        duration,
    );

    let sha256 = compute_time(
        || {
            use sha2::Digest;
            let mut sha256 = sha2::Sha256::new();
            sha256.update(buf);
            sha256.finalize()
        },
        duration,
    );

    let sha512 = compute_time(
        || {
            use sha2::Digest;
            let mut sha512 = sha2::Sha512::new();
            sha512.update(buf);
            sha512.finalize()
        },
        duration,
    );

    Times {
        md5,
        sha1,
        sha256,
        sha512,
    }
}

fn compute_time_node(mut cx: FunctionContext) -> JsResult<JsObject> {
    // let string;
    let time = cx.argument::<JsNumber>(1)?.value(&mut cx);
    // let buf = if let Ok(buffer) = cx.argument::<JsArrayBuffer>(0) {
    //     buffer.as_slice(&mut cx)
    // } else {
    //     string = cx.argument::<JsString>(0)?.value(&mut cx);
    //     string.as_bytes()
    // };
    let buf = cx.argument::<JsString>(0)?.value(&mut cx);
    let buf = buf.as_bytes();
    let Times {
        md5,
        sha1,
        sha256,
        sha512,
    } = compute_algorithm_times(buf, Duration::from_millis(time as u64));
    let obj = cx.empty_object();

    let md5 = cx.number(md5.as_secs_f64() * 1000.);
    obj.set(&mut cx, "md5", md5)?;

    let sha1 = cx.number(sha1.as_secs_f64() * 1000.);
    obj.set(&mut cx, "sha1", sha1)?;

    let sha256 = cx.number(sha256.as_secs_f64() * 1000.);
    obj.set(&mut cx, "sha256", sha256)?;

    let sha512 = cx.number(sha512.as_secs_f64() * 1000.);
    obj.set(&mut cx, "sha512", sha512)?;
    Ok(obj)
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("computeTime", compute_time_node)?;
    Ok(())
}
