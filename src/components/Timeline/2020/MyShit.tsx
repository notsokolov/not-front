import * as React from "react";
import Link from "next/link";
// import Image from "next/image";
import * as Icon from "react-feather";
import { TimelineEntry, Notes, EntriesForMonth, ButtonSet } from "../Entry";
import { BlogPost } from "../Entry/BlogPost";

export function MyShit() {
  return (
    <>
      <EntriesForMonth month="November, 2020" />

      <TimelineEntry
        title="Added new bookmark types"
        published_at="November 28, 2020"
        Icon={Icon.GitCommit}
      >
        <Notes content="asdfasdf" />

        <ButtonSet>
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
        </ButtonSet>
      </TimelineEntry>

      <BlogPost
        published_at="November 29, 2020"
        slug="tailwind-css-first-impressions"
        title="Tailwind CSS First Impressions"
        excerpt="My pros and cons for the Tailwind CSS framework after one week. My pros and cons for the Tailwind CSS framework after one week. My pros and cons for the Tailwind CSS framework after one week."
      />
    </>
  );
}
