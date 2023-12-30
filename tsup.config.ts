import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts', './src/cookie-file-consumer.ts'],
  outDir: './dist',
  bundle: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  target: ['node16', 'node18'],
  platform: 'node',
  dts: true,
  tsconfig: './tsconfig.json',
  format: 'esm',
});
