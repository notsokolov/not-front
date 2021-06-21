import { CenteredColumn } from "~/components/CenteredColumn";
import { GetStaticProps } from "next";
import { getResumeContent } from "~/lib/api";
import { MarkdownRenderer } from "~/components/MarkdownRenderer";
import { Resume } from "~/graphql/types.generated";

interface Props {
  resume: Resume;
}

export default function ResumePage({ resume }: Props) {
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-12" data-cy="about-page">
        <div className="prose">
          <MarkdownRenderer>{resume?.content}</MarkdownRenderer>
        </div>
      </div>
    </CenteredColumn>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resume: Resume = (await getResumeContent()) || [];
  return {
    props: {
      resume,
    },
  };
};
