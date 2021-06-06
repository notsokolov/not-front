import { fetchAPI } from './index';

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
  return data;
}
