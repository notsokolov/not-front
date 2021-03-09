import { useRouter } from "next/router";
import ErrorPage from "next/error";

import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPostsWithSlug } from "@/lib/api";

// import {PostBody} from '../../components/Blog/PostBody'
import { PostTitle } from "../../components/BlogPost/PostTitle";
import { BlogPost } from "../../components/BlogPost";
import { CenteredColumn } from "~/components/CenteredColumn";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <CenteredColumn preview={preview}>
      {router.isFallback ? <PostTitle title="zalupa" /> : <BlogPost />}
    </CenteredColumn>
  );
}

export async function getStaticProps({ params, preview = null }) {
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
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}
