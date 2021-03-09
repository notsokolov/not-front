import * as React from "react";
import Page, { PageHeader } from "~/components/Page";
// import { Post } from "~/graphql/types.generated";
import BlogList from "~/components/Blog/List";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getAllPostsForHome } from "../api/api";
import { GetStaticProps } from 'next'



// interface Props {
//   data: {
//     posts: Post[];
//   };
// }

function Blog({ allPosts, preview }: {allPosts: any, preview: any}) {
  console.debug(allPosts, preview);
  return (
    <Page data-cy="overthought">
      <CenteredColumn>
        <div className="flex flex-col space-y-14">
          <PageHeader
            title="My Blog!"
            subtitle="Thinking out loud about design, development, and building
              excellent software."
          />

          {allPosts && allPosts.posts && <BlogList posts={allPosts.posts} />}
          <BlogList posts={allPosts} />
        </div>
      </CenteredColumn>
    </Page>
  );
}

export const getStaticProps:GetStaticProps = async ({ preview = null }) => {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}

export default Blog;
