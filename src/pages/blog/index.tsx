import * as React from "react";
import { PageHeader } from "~/components/PageHeader";
import { BlogList } from "~/components/Blog/List";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getAllPosts } from "~/lib/api";
import { GetStaticProps } from "next";
import { Posts } from "~/interfaces";

interface Props {
  posts: Posts;
}

export default function Blog({ posts }: Props) {
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-8">
        <div className=" md:px-4">
          <PageHeader
            title="Блог"
            subtitle="Пишу о разработке по-философски...😆"
          />
        </div>
        {posts && <BlogList posts={posts} />}
      </div>
    </CenteredColumn>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Posts = (await getAllPosts()) || [];
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      posts,
    },
  };
};
