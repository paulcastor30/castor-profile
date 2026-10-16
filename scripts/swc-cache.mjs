import { fileURLToPath } from "node:url";

// Keep the native compiler cache with the installed dependencies so builds and
// tests also work in environments that cannot write to the user's Library folder.
process.env.SWC_NATIVE_BINDING_CACHE ??= fileURLToPath(new URL("../node_modules/.cache/swc", import.meta.url));
