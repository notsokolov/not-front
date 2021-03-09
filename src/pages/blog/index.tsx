import * as React from "react";
import Page, { PageHeader } from "~/components/Page";
import { Post } from "~/graphql/types.generated";
import BlogList from "~/components/Blog/List";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getAllPosts } from "../api/api";
import { GetStaticProps } from "next";

interface Props {
  posts: Post[];
  preview: boolean;
}

function Blog({ posts, preview }: Props) {
  console.debug(posts, preview);
  return (
    <Page data-cy="overthought">
      <CenteredColumn>
        <div className="flex flex-col space-y-14">
          <PageHeader
            title="My Blog!"
            subtitle="The place where I practice my english..."
          />
          {posts && <BlogList posts={posts} />}
        </div>
      </CenteredColumn>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const posts: any = (await getAllPosts(preview)) || [];
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      posts,
      preview,
    },
  };
};

export default Blog;
