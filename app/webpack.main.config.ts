import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import path from "node:path"
export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.node'],
    fullySpecified: false,
    fallback: {
      // "fs": false,
      // "crypto": false,
      "path": false
    }
  },
  externals: {
    // 'algorithm-time': "commonjs algorithm-time",
    // "../algorithm-time/index.node": "commonjs ../algorithm-time/index.node"
  },
  target: "electron-main"
};
