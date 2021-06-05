import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { GetStaticProps } from "next";
import { getResumeContent } from "~/lib/api";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

export default function Resume({ resume }) {
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-12" data-cy="about-page">
        <div className="prose lg:prose-lg">
          <MarkdownRenderer>{resume.content}</MarkdownRenderer>
        </div>
      </div>
    </CenteredColumn>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resume: any = (await getResumeContent()) || [];
  return {
    props: {
      resume,
    },
  };
};
