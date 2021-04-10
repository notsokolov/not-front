import * as React from "react";
import { Post } from "~/graphql/types.generated";
import { EntryBlogPost } from "./Entry/EntryBlogPost";
// import { BatteryCharging } from "react-feather";
// import { TimelineEntry } from "./Entry";

interface Props {
  posts: Post[];
}

export function Timeline({ posts }: Props) {
  return (
    <div className="flex flex-col w-full timeline-container">
      {/* <TimelineEntry
        title="Work in progress..."
        date="More timeline entries coming soon"
        Icon={BatteryCharging}
        color="blue"
        divider={false}
      /> */}
      {posts.map((post) => {
        return (
          <EntryBlogPost
            key={post.id}
            date={post.date}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
          />
        );
      })}
    </div>
  );
}
