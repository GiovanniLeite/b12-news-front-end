import { AuthorData } from './author';
import { CategoryData } from './category';

export type PostData = {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    topic: string;
    content: string;
    featured: boolean;
    date: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover?: { data: null | ImageData };
    thumbSquare?: { data: null | ImageData };
    author?: { data: AuthorData };
    category?: { data: CategoryData };
  };
};

export type ImageData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: null | {
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
    previewUrl: null | string;
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
