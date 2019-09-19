/**
 * Code injected to each JS-like module for react-refresh capabilities.
 *
 * [Reference for HMR Error Recovery](https://github.com/webpack/webpack/issues/418#issuecomment-490296365)
 */
// TODO: Is it possible to move this into a file?
const RefreshInjection = `
const $RefreshUtils$ = require('${require.resolve('./utils')}');

$RefreshUtils$.registerExportsForReactRefresh(module);

if (module.hot && $RefreshUtils$.isReactRefreshBoundary(module)) {
  module.hot.accept($RefreshUtils$.createHotErrorHandler(module.id));
  $RefreshUtils$.performFullRefreshIfNeeded();
  $RefreshUtils$.enqueueUpdate();
}
`;

/**
 * A simple Webpack loader to inject react-refresh code into modules.
 * @param {string} source The original module source code.
 * @returns {string} The injected module source code.
 */
function RefreshHotLoader(source) {
  return source + RefreshInjection;
}

module.exports = RefreshHotLoader;