async function fetchAPI(query, { variables } = {}) {
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
export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
      query Posts($where: JSON){
        posts(sort: "date:desc", limit: 10, where: $where) {
          title
          slug
          excerpt
          date
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: "published" }),
        },
      },
    }
  );
  return data?.posts;
}
