import * as React from "react";
import { PageHeader } from "~/components/PageHeader";
import { Bookmark } from "~/graphql/types.generated";
import { CenteredColumn } from "~/components/CenteredColumn";
import { getAllBookmarks } from "../../lib/api";
import { GetStaticProps } from "next";
import { BookmarksList } from "~/components/BookmarksList";

interface Props {
  bookmarks: Bookmark[];
}

export default function Bookmarks({ bookmarks }: Props) {
  return (
    <CenteredColumn>
      <div className="flex flex-col space-y-8">
        <PageHeader
          title="Закладки"
          subtitle="Пишу о разработке по-философски...😆"
        />
        {bookmarks && <BookmarksList bookmarks={bookmarks} />}
      </div>
    </CenteredColumn>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const bookmarks: Bookmark[] = (await getAllBookmarks()) || [];
  return {
    // because this data is slightly more dynamic, update it every hour
    revalidate: 60 * 60,
    props: {
      bookmarks,
    },
  };
};
