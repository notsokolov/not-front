import * as React from "react";
import { Post, UploadFile } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PostHeader } from "../../components/BlogPost/PostHeader";

import Head from "next/head";
import { PostBody } from "./PostBody";

export function BlogPost({ title, coverImage, updatedAt, content }: Post) {
  return (
    <React.Fragment>
      <CenteredColumn data-cy="overthought-post">
        <article>
          <Head>
            <title>{title}</title>
            {/* <meta property="og:image" content={post.ogImage.url} /> */}
          </Head>
          <PostHeader
            title={title}
            coverImage={coverImage}
            updatedAt={updatedAt}
          />
          <PostBody content={content} />
        </article>
      </CenteredColumn>
    </React.Fragment>
  );
}
