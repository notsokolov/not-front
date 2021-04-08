import { GetStaticProps } from "next";
import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { Timeline } from "~/components/Timeline";
import { Post } from "~/graphql/types.generated";
import { getAllPosts } from "~/lib/api";
// import Link from "next/link";
// import { Timeline } from "~/components/Timeline";
import { StripeBG } from "../components/StripeBG";

interface Props {
  posts: Post[];
}

function Home({ posts }: Props) {
  return (
    <>
      <StripeBG />
      <CenteredColumn>
        <Timeline posts={posts} />
      </CenteredColumn>
    </>
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

export default Home;
