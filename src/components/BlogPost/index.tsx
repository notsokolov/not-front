import * as React from "react";
import { Post } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PostHeader } from "../../components/BlogPost/PostHeader";

import Head from "next/head";
// import { PostBody } from "./PostBody";
import MarkdownRenderer from "../MarkdownRenderer";

export function BlogPost({ post }: { post: Post }) {
  if (post.content && post.title) {
    return (
      <React.Fragment>
        <CenteredColumn data-cy="overthought-post">
            <Head>
              <title>{post.title}</title>
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              updatedAt={post.updatedAt}
            />
            <MarkdownRenderer>{ post.content }</MarkdownRenderer>
        </CenteredColumn>
      </React.Fragment>
    );
  } else {
    return <h1>Content Lost...</h1>
  }
}
