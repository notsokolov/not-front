import * as React from "react";
import { PageHeader } from "~/components/PageHeader";
import { Post } from "~/graphql/types.generated";
import BlogList from "~/components/Blog/List";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getAllPosts } from "../../lib/api";
import { GetStaticProps } from "next";

interface Props {
  posts: Post[];
}

function Blog({ posts }: Props) {
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-14">
        <PageHeader
          title="Блог"
          subtitle="Пишу о разработке по-философски...😆"
        />
        {posts && <BlogList posts={posts} />}
      </div>
    </CenteredColumn>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: any = (await getAllPosts()) || [];
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      posts,
    },
  };
};

export default Blog;
