import { Slug } from "~/interfaces";

async function fetchAPI(query: any, { variables }: any = {}) {
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

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        id
        title
        slug
        excerpt
        date
        updatedAt
        author {
          name
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...{ status: "published" },
        },
      },
    }
  );
  return data?.posts;
}

export async function getPosts(slug: Slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      id
      title
      slug
      content
      date
      updatedAt
      author {
        name
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      updatedAt
      date

      author {
        name

      }
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
          ...{ status: "published" },
        },
        where_ne: {
          ...{ status: "published" },
          slug_ne: slug,
        },
      },
    }
  );
  return data;
}

export async function getAboutContent() {
  const data = await fetchAPI(
    `
    query {
      about {
        content
      }
    }
  `
  );
  return data?.about;
}

export async function getResumeContent() {
  const data = await fetchAPI(
    `
    query {
      resume {
        content
      }
    }
  `
  );
  return data?.resume;
}
