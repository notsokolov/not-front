import * as React from "react";
import { Post } from '~/graphql/types.generated'
import { FeaturedImage } from "./style";
import { format } from "timeago.js";
import { CenteredColumn } from "~/components/CenteredColumn";

export default function PostView( post : Post[]) {
  return (
    <React.Fragment>
      <CenteredColumn data-cy="overthought-post">

        <div className="flex flex-col space-y-8">
          {post.coverImage && (
            <FeaturedImage alt={post.title}  src={`http://192.168.0.102:1337${post.coverImage.url}`} />
          )}
          <div className="flex flex-col space-y-4">
            <h1>{post.title}</h1>
            <p className="p-small">Updated {format( post.updatedAt )}</p>
          </div>
        </div>

        <div
          style={{ marginTop: "16px" }}
          className="prose lg:prose-lg prose-blue"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="flex flex-col space-y-8">
          <div />
          <div />
        </div>
      </CenteredColumn>
    </React.Fragment>
  );
}
