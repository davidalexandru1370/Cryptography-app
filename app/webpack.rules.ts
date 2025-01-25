import type { ModuleOptions } from 'webpack';
import path from 'node:path'
export const rules: Required<ModuleOptions>['rules'] = [
  // // Add support for native node modules
  // {
  //   // We're specifying native_modules in the test because the asset relocator loader generates a
  //   // "fake" .node file which is really a cjs file.
  //   test: /native_modules[/\\].+\.node$/,
  //   use: 'node-loader',
  // },
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /\.node$/,
    loader: 'native-ext-loader',
    options: {
      rewritePath: path.resolve(__dirname, "src")
    }
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: true },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  }
];
