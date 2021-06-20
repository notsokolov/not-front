import * as React from "react";
import Link from "next/link";
import Prism from "prismjs";
import htmlParser from "react-markdown/plugins/html-parser";
import Markdown from "react-markdown";

interface Props {
  children: string;
  escapeHtml?: boolean;
}

const parseHtml = htmlParser({
  isValidNode: (node: any) => node.type !== "script",
});

function LinkRenderer(props: any) {
  const { href, children } = props;
  const baseUrl = "https://brianlovin.com";
  const isSelf = href.indexOf(baseUrl) === 0;
  if (isSelf) {
    return (
      <Link href={href === baseUrl ? "/" : href.replace(baseUrl, "")}>
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function MarkdownRenderer(props: Props) {
  const { children, ...rest } = props;

  React.useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <React.Fragment>
      <Markdown
        {...rest}
        className="prose md:prose-md"
        astPlugins={[parseHtml]}
        renderers={{
          link: LinkRenderer,
        }}
      >
        {children}
      </Markdown>
    </React.Fragment>
  );
}
