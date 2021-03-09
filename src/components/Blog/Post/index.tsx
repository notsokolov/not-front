import * as React from "react";
// import { Post } from '~/graphql/types.generated'
import { FeaturedImage } from "./style";
import { format } from "timeago.js";
import { CenteredColumn } from "~/components/CenteredColumn";

// interface Props {
//   post: Post
// }

export default function PostView({ post }) {
  return (
    <React.Fragment>
      <CenteredColumn data-cy="overthought-post">
        <div className="flex flex-col space-y-8">
          {post.feature_image && (
            <FeaturedImage alt={post.title} loading="lazy" src={post.picture} />
          )}
          <div className="flex flex-col space-y-4">
            <h1>{post.title}</h1>
            <p className="p-small">Updated {format(post.updated_at)}</p>
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
