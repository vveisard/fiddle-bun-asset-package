const ouput = await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./build",
  naming: {
    // default values
    entry: "[dir]/[name].[ext]",
    chunk: "[name]-[hash].[ext]",
    asset: "[dir]/[name].[ext]",
  },
});

console.log(ouput);

export {};
