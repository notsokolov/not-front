import { fetchAPI } from "./index";

export async function getPost(slug: any) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts (where: $where) {
      id
      title
      slug
      content
      updatedAt
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  );
  return data?.posts[0];
}
