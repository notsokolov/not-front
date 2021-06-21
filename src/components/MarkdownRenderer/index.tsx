import Markdown from "react-markdown";

interface Props {
  children: string;
  escapeHtml?: boolean;
}

export function MarkdownRenderer(props: Props) {
  const { children, ...rest } = props;


  return <Markdown>{children}</Markdown>;
}
