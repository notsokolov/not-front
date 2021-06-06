import { Slug } from "~/interfaces";
import { fetchAPI } from "./index";

export async function getPost(slug: Slug) {
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
