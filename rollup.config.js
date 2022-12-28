import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      terser({
        output: {
          comments: false,
        },
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
        esModule: true,
      },
    ],
    plugins: [dts()],
  },
];
