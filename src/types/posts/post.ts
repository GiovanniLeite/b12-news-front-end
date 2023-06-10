import { AuthorData } from './author';
import { CategoryData } from './category';

export type PostData = {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    feedPostHeader: string;
    content: string;
    emphasis: boolean;
    date: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: { data: null | ImageData };
    thumbSquare: { data: null | ImageData };
    author: { data: AuthorData };
    category: { data: CategoryData };
  };
};

export type ImageData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: {
      large: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
};

export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};
