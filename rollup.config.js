import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'app',
    sourcemap: true
  },
  plugins: [
    svelte({
      // Enable run-time checks when not in production
      dev: !production,
      // We will extract any component CSS out into a separate file
      css: css => {
        css.write('public/bundle.css');
      }
    }),

    // If you have external dependencies installed from npm, you will most
    // likely need these plugins.  In some cases you willl need additional
    // configuration - consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({browser: true}),
    commonjs(),

    // Watch the 'public' directory and refresh the browser on changes when not
    // in production
    !production && livereload('public'),

    // If we are building for production (npm run build instead of npm run dev),
    // minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
