import { fetchJson } from '../../utils/fetchJson';
import { API_POSTS_URL } from '../../config/app-config';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${API_POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
