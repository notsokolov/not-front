import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { markdownToHtml } from "../../../lib/markdownToHtml";
import { getAllPostsWithSlug } from "../api";

// import {PostBody} from '../../components/Blog/PostBody'
import { PostTitle } from "../../../components/BlogPost/PostTitle";
import { BlogPost } from "../../../components/BlogPost";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getPostAndMorePosts } from "~/lib/api";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <CenteredColumn preview={preview}>
      <h1>Zalupa</h1>
        <ErrorPage statusCode={404} />
      </CenteredColumn>
    );
  }
  return (
    <CenteredColumn preview={preview}>
      {/* {router.isFallback ? <PostTitle title="zalupa" /> : <h1>Fuck Off!</h1>} */}
      <h1>Zalupa</h1>
    </CenteredColumn>
  );
}

export async function getStaticProps({ params , preview = false } : { params : any, preview: boolean}) {
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
