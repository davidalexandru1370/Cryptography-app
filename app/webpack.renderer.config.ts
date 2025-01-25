import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.node'],
    fallback: {
      "path": false
    }
  },
  externals: {
    // 'algorithm-time': "commonjs algorithm-time"
    // ,
    // "node_modules/algorithm-time/index.node": "commonjs node_modules/algorithm-time/index.node"
  },
  target: "electron-renderer"
};
