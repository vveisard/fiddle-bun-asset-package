import { type BunPlugin } from "bun";

const filePathResolverPlugin: BunPlugin = {
  name: "File path resolver",
  setup(build) {
    build.onResolve({ filter: /\.(webp)$/ }, async (args) => ({
      path: args.path,
    }));
  },
};

// plugin(filePathResolver);

export { filePathResolverPlugin };
