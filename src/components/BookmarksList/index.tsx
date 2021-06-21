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
    <div className="flex flex-col space-y-4">
      {bookmarks.map((bookmark) => (
        <article className="flex flex-col" key={bookmark.id}>
          <h5 className="text-base font-medium">{bookmark.title}</h5>

          <main className="pl-4 border-l-2 border-gray-200 ">
            <div className="prose">
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
