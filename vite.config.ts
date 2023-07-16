import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solid(),
    eslint({ exclude: [/virtual:/, /node_modules/, /.storybook/] }),
  ],
});
