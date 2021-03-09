import * as React from "react";
import { UploadFile } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import {PostHeader} from '../../components/BlogPost/PostHeader';

import Head from "next/head";
import { TDate } from "timeago.js";

interface BlogPost {
  title: string;
  coverImage: UploadFile;
  updatedAt: TDate;
  content: string;
}


export function BlogPost(post: BlogPost[]) {
  return (
    <React.Fragment>
      <CenteredColumn data-cy="overthought-post">
      <article>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with Strapi
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              updatedAt={post.updatedAt}
            />
            <PostBody content={post.content} />
          </article>
      </CenteredColumn>
    </React.Fragment>
  );
}
