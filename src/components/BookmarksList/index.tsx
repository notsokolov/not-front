import * as React from "react";
import { Bookmark } from "~/graphql/types.generated";
// import Link from "next/link";
import { UpdatedAt } from "~/components/BlogPost/UpdatedAt";
import { MarkdownRenderer } from "../MarkdownRenderer";

interface Props {
  bookmarks: Bookmark[];
}

export function BookmarksList({ bookmarks }: Props) {
  if (!bookmarks || bookmarks.length === 0) return null;
  return (
    <div className="flex flex-col space-y-6">
      {bookmarks.map((bookmark) => (
        <article className="flex flex-col space-y-1" key={bookmark.id}>
          <h4>{bookmark.title}</h4>

          <main className="pl-4 border-l-2 border-gray-300 border-dotted">
            <div className="py-1">
              <MarkdownRenderer>{bookmark.content}</MarkdownRenderer>
            </div>
            {/* <p className="p-small">
            Добавлено <UpdatedAt updatedAt={bookmark.createdAt} />
          </p>         */}
          </main>
        </article>
      ))}
    </div>
  );
}
