import axios, { AxiosError } from 'axios';

import { API_POSTS_URL } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';
import { ResponseData } from '../../types/posts/response';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  try {
    const response = await axios.get<ResponseData>(`${API_POSTS_URL}?${query}`);

    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    if (!response.data.data || response.data.data.length === 0) {
      throw new Error('Nenhum post encontrado');
    }

    return response.data.data as PostData[];
  } catch (err) {
    const error = err as AxiosError<ResponseData>;
    const errorMessage = error.response?.data?.error?.message ?? error.message ?? 'Erro desconhecido';
    throw new Error(`Erro ao obter posts: ${errorMessage}`);
  }
};
