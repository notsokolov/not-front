import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { markdownToHtml } from "../../lib/markdownToHtml";
import { getAllPostsWithSlug } from "../../../src/lib/api";

// import {PostBody} from '../../components/Blog/PostBody'
import { PostTitle } from "../../components/BlogPost/PostTitle";
import { BlogPost } from "../../components/BlogPost";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getPostAndMorePosts } from "~/lib/api";
import { Post } from "~/graphql/types.generated";

export default function SinglePost({
  post,
  preview,
}: {
  post: Post;
  preview: boolean;
}) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <CenteredColumn preview={preview}>
        <h1>Zalupa 1 </h1>
        <ErrorPage statusCode={404} />
      </CenteredColumn>
    );
  }
  return (
    <CenteredColumn preview={preview}>
      {router.isFallback ? (
        <PostTitle title="Loading..." />
      ) : (
        // <p>{post.content}</p>
        <BlogPost post={post} />
      )}
    </CenteredColumn>
  );
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: any;
  preview: boolean;
}) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.posts[0]?.content || "");

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post: any) => `/blog/${post.slug}`) || [],
    fallback: true,
  };
}
