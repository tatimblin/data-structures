const { build } = require("esbuild");

build({
    entryPoints: ["./src/index.ts"],
    outdir: "dist",
    bundle: true,
    minify: true,
    splitting: true,
    platform: 'neutral',
    format: "esm",
});
