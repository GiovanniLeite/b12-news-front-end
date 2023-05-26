import { CategoryData } from './category';
import { PostData } from './post';

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
