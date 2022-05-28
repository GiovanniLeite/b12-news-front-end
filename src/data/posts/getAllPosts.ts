import { API_POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetchJson';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${API_POSTS_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};
