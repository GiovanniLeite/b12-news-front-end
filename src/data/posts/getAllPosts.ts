import { API_POSTS_URL } from '../../config/app-config';
import { PostData, ResponseData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetchJson';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  try {
    const response = await fetchJson<ResponseData>(`${API_POSTS_URL}?&${query}`);

    if (response.error) {
      throw new Error(response.error.message);
    }

    if (!response.data || response.data.length === 0) {
      throw new Error('Nenhum post encontrado');
    }

    return response.data as PostData[];
  } catch (error) {
    throw new Error(`Erro ao obter posts: ${error.message}`);
  }
};
