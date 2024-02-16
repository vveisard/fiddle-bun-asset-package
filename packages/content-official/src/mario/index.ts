import {
  type ContentId,
  type ContentModuleData,
  type CharacterContentData,
} from "lib-core";
import backgroundImagePath from "./assets/background.png";
import renderImagePath from "./assets/render.webp";

const backgroundImageUrl = new URL(backgroundImagePath, import.meta.url);
const renderImageUrl = new URL(renderImagePath, import.meta.url);
const thisContentModuleBaseContentId: ContentId = "mario";

const thisCharacterContentData: CharacterContentData = {
  backgroundImageUrl: backgroundImageUrl,
  renderImageUrl: renderImageUrl,
};

const thisContentModuleData: ContentModuleData = {
  characters: {
    ids: [thisContentModuleBaseContentId],
    datas: {
      [thisContentModuleBaseContentId]: thisCharacterContentData,
    },
  },
};

export default thisContentModuleData;
