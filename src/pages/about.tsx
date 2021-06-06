import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { GetStaticProps } from "next";
import { getAboutContent } from "~/lib/api";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { About } from "~/graphql/types.generated";

interface Props {
  about: About;
}

export default function AboutPage({ about }: Props) {
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-12" data-cy="about-page">
        <div className="prose lg:prose-lg">
          <MarkdownRenderer>{about.content}</MarkdownRenderer>
        </div>
      </div>
    </CenteredColumn>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const about: About = (await getAboutContent()) || [];
  return {
    props: {
      about,
    },
  };
};
