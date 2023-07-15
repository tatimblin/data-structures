const { Generator } = require("npm-dts");
const { build } = require("esbuild");

new Generator({
    entry: "src/index.ts",
    output: "dist/index.d.ts",
}).generate();

build({
    entryPoints: ["src/index.ts"],
    outdir: "dist",
    bundle: true,
    minify: true,
    splitting: true,
    platform: 'neutral',
    format: "esm",
});
