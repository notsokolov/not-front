export async function fetchAPI(query: any, { variables }: any = {}) {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
  
}

export { getPost } from "./getPost";
export { getAllPosts } from "./getAllPosts";
export { getAllPostsWithSlug } from "./getAllPostsWithSlug";
export { getResumeContent } from "./getResumeContent";
export { getAboutContent } from "./getAboutContent";
export { getAllBookmarks } from "./getAllBookmarks";
