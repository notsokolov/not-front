import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPostsWithSlug } from "~/lib/api";
import { PostTitle } from "../../components/BlogPost/PostTitle";
import { BlogPost } from "../../components/BlogPost";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getPost } from "~/lib/api";
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
        <BlogPost post={post} />
      )}
    </CenteredColumn>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const post = await getPost(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllPostsWithSlug();
  return {
    paths: data?.posts?.map((post: Post) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
}
