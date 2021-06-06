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
      posts(sort: "updatedAt:desc", limit: 10, where: $where) {
        id
        title
        slug
        excerpt
        updatedAt
        pinned
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

export async function getAllBookmarks() {
  const data = await fetchAPI(
    `
    query Bookmarks {
      bookmarks (sort: "date:desc", limit: 50) {
        id
        title
        content
        date
       }
    }
  `
  );
  return data?.bookmarks;
}

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
