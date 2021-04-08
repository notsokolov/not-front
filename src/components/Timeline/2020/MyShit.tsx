import * as React from "react";
import Link from "next/link";
// import Image from "next/image";
import * as Icon from "react-feather";
import { TimelineEntry, Notes, EntriesForMonth, ButtonSet } from "../Entry";
import { EntryBlogPost } from "../Entry/EntryBlogPost";

export function MyShit() {
  return (
    <>
      <EntriesForMonth month="November, 2020" />

      <TimelineEntry
        title="Added new bookmark types"
        date="November 28, 2020"
        Icon={Icon.GitCommit}
      >
        <Notes content="Большая часть текста сделана из разделов 1.10.32–3 книги Цицерона «На грани Добра и Зла» («De finibus bonorum et malorum»). Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit является первой известной человечеству версией («Больше нет никого из тех, кто любит скорбь, поскольку это горе и поэтому хочет заполучить это»). " />

        {/* <ButtonSet>
          <Link passHref href="/bookmarks">
            <a className="w-full md:w-auto">
              <button className="w-full md:w-auto btn">
                <span>Go to Bookmarks</span>
              </button>
            </a>
          </Link>
          <a
            href="https://github.com/brianlovin/brian-lovin-next/pull/1190"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto btn">
              <>
                <Icon.GitMerge size={16} />
                <span>View pull request</span>
              </>
            </button>
          </a>
        </ButtonSet> */}
      </TimelineEntry>

      <EntryBlogPost
        date="November 29, 2020"
        slug="tailwind-css-first-impressions"
        title="Tailwind CSS First Impressions"
        excerpt="My pros and cons for the Tailwind CSS framework after one week. My pros and cons for the Tailwind CSS framework after one week. My pros and cons for the Tailwind CSS framework after one week."
      />
    </>
  );
}
