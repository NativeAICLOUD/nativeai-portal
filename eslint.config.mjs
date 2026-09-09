import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([{
    // `next lint` used to ignore build output implicitly; the plain ESLint
    // CLI doesn't, so without this it lints compiled bundles in .next*/.
    ignores: [
        "**/.next/**",
        "**/.next-*/**",
        "**/node_modules/**",
        "**/out/**",
        "**/build/**",
        "**/coverage/**",
        "public/sw.js",
        "public/workbox-*.js",
    ],
}, {
    extends: [...nextCoreWebVitals],
    rules: {
        // eslint-config-next 16 (via eslint-plugin-react-hooks 7) added this
        // rule newly; several pre-existing effects in dashboard/search pages
        // trip it. Downgraded to warn until those are refactored separately.
        "react-hooks/set-state-in-effect": "warn",
    },
}]);