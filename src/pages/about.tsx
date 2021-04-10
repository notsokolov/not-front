import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { GetStaticProps } from "next";
import { getAboutContent } from "~/lib/api";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

function About({ about }) {
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
  const about: any = (await getAboutContent()) || [];
  return {
    props: {
      about,
    },
  };
};

export default About;
