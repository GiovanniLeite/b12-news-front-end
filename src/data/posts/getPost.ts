import { API_POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetchJson';
import { markdownToHtml } from '../../utils/markdownToHtml';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${API_POSTS_URL}?slug=${slugString}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  if (!jsonPosts.length) return jsonPosts;

  const content = await markdownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};
