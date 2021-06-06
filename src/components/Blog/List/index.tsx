import * as React from "react";
import { Post } from "~/graphql/types.generated";
import Link from "next/link";
import { UpdatedAt } from "~/components/BlogPost/UpdatedAt";
import { Posts } from "~/interfaces";

interface Props {
  posts: Posts;
}

export function BlogList({ posts }: Props) {
  if (!posts || posts.length === 0) return null;
  return (
    <div className="flex flex-col space-y-6">
      {posts.map((post: Post) => {
        if (post.pinned == true) {
          return console.log("pinned");
        } else {
          return (
            <div className="flex flex-col space-y-1" key={post.id}>
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`} passHref>
                <a className="text-blue-600 dark:text-blue-500">{post.title}</a>
              </Link>
              {post.excerpt && <p className="clamp-2">{post.excerpt}</p>}
              <p className="p-small">
                Обновлено <UpdatedAt updatedAt={post.updatedAt} />
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
