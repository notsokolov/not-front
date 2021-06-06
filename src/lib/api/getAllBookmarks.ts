import { fetchAPI } from "./index";

export async function getAllBookmarks() {
  const data = await fetchAPI(
    `
    query Bookmarks {
      bookmarks (sort: "createdAt:desc", limit: 50) {
        id
        title
        content
        createdAt  
      }
    }
  `
  );
  return data?.bookmarks;
}
