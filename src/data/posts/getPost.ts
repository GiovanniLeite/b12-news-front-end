import { API_POSTS_URL } from '../../config/app-config';
import { ResponseData, PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetchJson';

export const getPost = async (slug: string): Promise<PostData> => {
  try {
    const response = await fetchJson<ResponseData>(`${API_POSTS_URL}?filters[slug][$eq]=${slug}`);

    if (response.error) {
      throw new Error(response.error.message);
    }

    if (!response.data || response.data.length === 0) {
      throw new Error('Nenhum post encontrado com o slug fornecido');
    }

    return response.data[0] as PostData;
  } catch (error) {
    throw new Error(`Erro ao obter post: ${error.message}`);
  }
};
