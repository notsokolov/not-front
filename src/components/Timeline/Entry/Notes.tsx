import * as React from "react";
import { MarkdownRenderer } from "../../MarkdownRenderer";

// interface Bookmark {
//   content: string
// }

export function Notes({ content }: any) {
  return (
    <div className="mt-2 prose timeline-inset prose-md">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </div>
  );
}
