import { API_POSTS_URL } from '../../config/app-config';
import { ResponseData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetchJson';

export const countAllPosts = async (): Promise<number> => {
  try {
    const response = await fetchJson<ResponseData>(API_POSTS_URL);

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.meta.pagination.total;
  } catch (error) {
    throw new Error(`Erro ao obter o número posts: ${error.message}`);
  }
};
