import { plugin } from "bun";
import { Resvg } from "@resvg/resvg-js";
import { createSvgDocumentText } from "tool-create-svg";
//
import { filePathResolverPlugin } from "../plugin.ts";
import type { CharacterContentData } from "lib-core";

plugin(filePathResolverPlugin); // file resolver

// async import, to import *after* the plugin is registered
const officialContentModule = (await import("../src/index.ts")).default;

for (const iCharacterContentId of officialContentModule.characters.ids) {
  const iCharacterContentData: CharacterContentData =
    officialContentModule.characters.datas[iCharacterContentId];

  const iCharacterContentDataSVGDocument = createSvgDocumentText(
    iCharacterContentData
  );

  const resvg = new Resvg(iCharacterContentDataSVGDocument);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  await Bun.write(iCharacterContentData.renderImageUrl, pngBuffer);
}
