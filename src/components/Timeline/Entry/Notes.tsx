import { MarkdownRenderer } from "../../MarkdownRenderer";

export function Notes({ content }: any) {
  return (
    <div className="mt-2 prose timeline-inset prose-md">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </div>
  );
}
