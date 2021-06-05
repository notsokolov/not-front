import * as React from "react";
import { Post } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PostHeader } from "../../components/BlogPost/PostHeader";
import Head from "next/head";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { LinkBack } from "./LinkBack";

export function BlogPost({ post }: { post: Post }) {
  if (post.content && post.title) {
    return (
      <React.Fragment>
        <CenteredColumn data-cy="overthought-post">
          <Head>
            <title>{post.title}</title>
          </Head>
          <PostHeader title={post.title} updatedAt={post.updatedAt} />
          <div className="mt-8">
            <MarkdownRenderer>{post.content}</MarkdownRenderer>
          </div>
          <div className="mt-6">
            <LinkBack />
          </div>
        </CenteredColumn>
      </React.Fragment>
    );
  } else {
    return <h1>Content Lost...</h1>;
  }
}
