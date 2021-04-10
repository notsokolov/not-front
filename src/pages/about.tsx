import * as React from "react";
import Image from "next/image";
import { CenteredColumn } from "~/components/CenteredColumn";
import { GetStaticProps } from "next";
import { getAboutContent } from "~/lib/api";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";

function About({ about }) {
  console.log(about);
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-12" data-cy="about-page">
        <div className="-mx-4 -mt-24 md:mt-0 md:-mx-8 ">
        </div>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col prose lg:prose-lg">
            <MarkdownRenderer>{about.content}</MarkdownRenderer>
          </div>
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
