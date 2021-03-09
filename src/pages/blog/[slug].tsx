import * as React from "react";
import { Post } from "~/graphql/types.generated";
import Page from "~/components/Page";
import PostContainer from "~/components/Blog/Post";
import NotFound from "~/components/Blog/NotFound";
import { getAllPostsForHome } from "../api/api";
// import { initApolloClient } from '~/graphql/services/apollo'

// interface Props {
//   slug: string
//   data: {
//     post: Post
//   }
// }
export async function getStaticPaths({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  if (!allPosts) return { paths: [], fallback: true };

  const paths = allPosts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

function MyPost({ allPosts, preview }) {
  const post = allPosts?.[3];

  if (!post) return <NotFound />;

  return (
    <Page>
      <PostContainer post={post} />
    </Page>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}

export default MyPost;
