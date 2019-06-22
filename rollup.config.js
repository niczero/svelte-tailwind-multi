import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import multiInput from 'rollup-plugin-multi-input';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: ['src/index.js', 'src/todo.js'],
  output: {
    dir: 'public',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'src/*.html',
          dest: 'public'
        },
        {
          src: 'src/img/favicon.png',
          dest: 'public'
        },
        {
          src: 'src/img/**/*',
          dest: 'public/img'
        }
      ]
    }),

    multiInput(),

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
