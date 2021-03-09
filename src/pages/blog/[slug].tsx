import * as React from "react";
import { Post } from "~/graphql/types.generated";
import Page from "~/components/Page";
import PostContainer from "~/components/Blog/Post";
import NotFound from "~/components/Blog/NotFound";
import { getAllPosts } from "../api/api";
// import { initApolloClient } from '~/graphql/services/apollo'

interface Props {
  slug: string;
  post: Post;
}
export async function getStaticPaths({ preview = null }) {
  const allPosts = (await getAllPosts(preview)) || [];

  if (!allPosts) return { paths: [], fallback: true };

  const paths = allPosts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

function MyPost({ allPosts, preview }: Props) {
  const post = allPosts?.[3];

  if (!post) return <NotFound />;

  return (
    <Page>
      <PostContainer post={post} />
    </Page>
  );
}

export async function getStaticProps({
  params: { slug },
  preview = false,
}: {
  params: { slug: any };
  preview: boolean;
}) {
  const res = (await getAllPosts(preview)) || [];
  const { post } = res;
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      slug,
      post,
    },
  };
}

export default MyPost;
