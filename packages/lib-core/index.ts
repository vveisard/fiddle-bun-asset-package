// @region-begin

interface EntityCollection<TId extends PropertyKey, TData> {
  readonly ids: Array<TId>;
  readonly datas: Record<TId, TData>;
}

type ContentId = string;

export { type ContentId, type EntityCollection };

// @region-end

// @region-begin

interface CharacterContentData {
  readonly backgroundImageUrl: URL;
  readonly renderImageUrl: URL;
}

/**
 * Manifest of a content module for this project.
 * Content module can contain any number of modules.
 */
interface ContentModuleData {
  readonly characters: EntityCollection<ContentId, CharacterContentData>;
}

export { type ContentModuleData, type CharacterContentData };
