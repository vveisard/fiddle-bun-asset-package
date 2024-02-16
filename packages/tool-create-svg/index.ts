import type { CharacterContentData } from "lib-core";

function createSvgDocumentText(
  characterContentData: CharacterContentData
): string {
  const backgroundImageHref: string =
    characterContentData.backgroundImageUrl.protocol === "file:"
      ? characterContentData.backgroundImageUrl.pathname
      : characterContentData.backgroundImageUrl.href;

  // TODO resvg should support the "file:" protocol in <image> href

  return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="red" />
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        <image href="${backgroundImageHref}" height="200" width="200" />
    </svg>
    `;
}

export { createSvgDocumentText };
