import axios, { AxiosError } from 'axios';

import { API_POSTS_URL } from '../../config/appConfig';
import { PostData } from '../../types/posts/post';
import { ResponseData } from '../../types/posts/response';
import { markdownToHtml } from '../../utils/markdownToHtml';

export const getPost = async (slug: string | string[]): Promise<PostData> => {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const response = await axios.get<ResponseData>(`${API_POSTS_URL}?populate=*&filters[slug][$eq]=${slugString}`);

    if (response.data.error) {
      throw new Error(response.data.error.message);
    }

    if (!response.data.data || response.data.data.length === 0) {
      throw new Error('Nenhum post encontrado com o slug fornecido');
    }

    const post = response.data.data[0] as PostData;
    const content = await markdownToHtml(post.attributes.content);
    post.attributes.content = content;

    return post;
  } catch (err) {
    const error = err as AxiosError<ResponseData>;
    const errorMessage = error.response?.data?.error?.message ?? error.message ?? 'Erro desconhecido';
    throw new Error(`Erro ao obter post: ${errorMessage}`);
  }
};
