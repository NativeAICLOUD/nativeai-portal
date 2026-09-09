// Intentionally empty. Used as a Turbopack browser-resolve alias target for
// Node.js-only built-ins (fs, net, tls) that must not end up in client bundles.
// Mirrors the webpack `resolve.fallback` below for production (webpack) builds.
module.exports = {};
