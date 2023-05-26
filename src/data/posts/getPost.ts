import { PostData } from '../../domain/posts/post';
import { ResponseData } from '../../domain/posts/response';
import { fetchJson } from '../../utils/fetchJson';
import { API_POSTS_URL } from '../../config/appConfig';
import { markdownToHtml } from '../../utils/markdownToHtml';

export const getPost = async (slug: string | string[]): Promise<PostData> => {
  try {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const response = await fetchJson<ResponseData>(`${API_POSTS_URL}?populate=*&filters[slug][$eq]=${slugString}`);

    if (response.error) {
      throw new Error(response.error.message);
    }

    if (!response.data || response.data.length === 0) {
      throw new Error('Nenhum post encontrado com o slug fornecido');
    }

    const post = response.data[0] as PostData;
    const content = await markdownToHtml(post.attributes.content);
    post.attributes.content = content;

    return post;
  } catch (error) {
    throw new Error(`Erro ao obter post: ${error.message}`);
  }
};
