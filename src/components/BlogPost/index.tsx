import * as React from "react";
import { Post } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PostHeader } from "../../components/BlogPost/PostHeader";
import Head from "next/head";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { LinkBack } from "./LinkBack";

export function BlogPost({ post }: { post: Post }) {
  return (
    <React.Fragment>
      <CenteredColumn data-cy="overthought-post">
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostHeader title={post.title} updatedAt={post.updatedAt} />
        <div className="mt-8 prose md:prose-md mx-auto max-w-xl">
          <MarkdownRenderer>{post.content}</MarkdownRenderer>
          <div className="max-w-2xl mx-auto"></div>
        </div>
        <div className="mt-6">
          <LinkBack />
        </div>
      </CenteredColumn>
    </React.Fragment>
  );
}
