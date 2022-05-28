export type PostID = number;

export type PostData = {
  id: PostID;
  title: string;
  subtitle: string;
  feedPostHeader: string;
  content: string;
  isHome: boolean;
  isEmphasis: boolean;
  date: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  slug: string;
  author: AuthorData;
  category: CategoryData;
  cover: PostCover;
  thumbSquare: PostCover;
};

export type AuthorData = {
  id: number;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  post: PostID;
};

export type CategoryData = {
  id: number;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  post: PostID;
};

export type PostCoverFormat = {
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

export type PostCover = PostCoverFormat & {
  id: PostID;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};
