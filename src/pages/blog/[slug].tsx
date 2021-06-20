import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllPostsWithSlug } from "~/lib/api";
import { PostTitle } from "../../components/BlogPost/PostTitle";
import { BlogPost } from "../../components/BlogPost";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getPost } from "~/lib/api";
import { Post } from "~/graphql/types.generated";
import { FC } from "react";

interface Props {
  post: Post;
}

const SinglePost: FC<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return (
      <CenteredColumn>
        <ErrorPage statusCode={404} />
      </CenteredColumn>
    );
  }

  if (router.isFallback) {
    return (
      <CenteredColumn>
      <PostTitle title="Загрузга..." />
    </CenteredColumn>
    );
  }

  return (
    <CenteredColumn>
    <BlogPost post={post} />
  </CenteredColumn>
  );
};

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

export default SinglePost;
