import { fetchAPI } from "./index";

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query Posts{
      posts (sort: "updatedAt:desc", limit: 20) {
        id
        title
        slug
        excerpt
        updatedAt
        pinned
      }
    }
  `
  );
  return data?.posts;
}
