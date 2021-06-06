import { GetStaticProps } from "next";
import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { Timeline } from "~/components/Timeline";
import { Posts } from "~/interfaces";
import { getAllPosts } from "~/lib/api";
import { Hero } from "../components/Hero";

interface Props {
  posts: Posts;
}

export default function HomePage({ posts }: Props) {
  return (
    <>
      <Hero />
      <CenteredColumn>
        <Timeline posts={posts} />
      </CenteredColumn>
    </>
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
