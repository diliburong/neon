// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import { esbuildPlugin } from '@web/dev-server-esbuild';
/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

// import { fromRollup } from "@web/dev-server-rollup";
// import rollupJson from "@rollup/plugin-json";

// const json = fromRollup(rollupJson);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: '/demo/',
  watch: !hmr,
  // mimeTypes: {
  //   "**/*.json": "js",
  // },
  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },

  plugins: [
    // json(),
    // transform TS, JSX, TSX and JSON to JS
    // ref: https://modern-web.dev/guides/dev-server/typescript-and-jsx/#typescript
    esbuildPlugin({ ts: true })
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
});
