import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getAllPostsWithSlug } from "../../../src/lib/api";

import { PostTitle } from "../../components/BlogPost/PostTitle";
import { BlogPost } from "../../components/BlogPost";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getPosts } from "~/lib/api";
import { Post } from "~/graphql/types.generated";

export default function SinglePost({ post }: { post: Post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return (
      <CenteredColumn>
        <ErrorPage statusCode={404} />
      </CenteredColumn>
    );
  }
  return (
    <CenteredColumn>
      {router.isFallback ? (
        <PostTitle title="Загрузга..." />
      ) : (
        // <p>{post.content}</p>
        <BlogPost post={post} />
        // <PostTitle title="PSHEL NA HUY" />
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
  const data = await getPosts(params.slug);
  const content = data?.posts[0]?.content;

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllPostsWithSlug();
  return {
    paths: data?.posts?.map((post: any) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
}
