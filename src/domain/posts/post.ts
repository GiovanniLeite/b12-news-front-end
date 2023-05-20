export type ResponseData = {
  data: null | PostData[] | CategoryData[];
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
};

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

export type AuthorData = {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type CategoryData = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};
