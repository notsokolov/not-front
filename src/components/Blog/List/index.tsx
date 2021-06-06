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
    <div className="flex flex-col">
      {posts.map((post: Post) => {
        return (
          <div
            className={`space-y-1 px-4 my-1 ${
              post.pinned
                ? " py-3 order-first bg-indigo-50 rounded-md"
                : "py-2 "
            }`}
            key={post.id}
          >
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`} passHref>
              <a className="text-indigo-500 hover:text-indigo-900">
                {post.title}
              </a>
            </Link>
            {post.excerpt && <p className="clamp-2">{post.excerpt}</p>}
            <p className="p-small">
              Обновлено <UpdatedAt updatedAt={post.updatedAt} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
