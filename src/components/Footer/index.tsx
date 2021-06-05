import React from "react";
import Link from "next/link";
import { CenteredColumn } from "../CenteredColumn";

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-blue-zalupa-plus dark:bg-gray-800 timeline-stroke" />
      <div className="grid grid-cols-1 gap-4 p-6 py-24  sm:grid-cols-3 dark:bg-gray-900 sm:dark:bg-gray-1000">
        <div className="flex flex-col space-y-4">
          <Link href="/" as="/" passHref>
            <a className="black-link">Главная</a>
          </Link>
          <Link href="/about" as="/about" passHref>
            <a className="black-link">Эбаут</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/blog" as="/blog" passHref>
            <a className="black-link">Блог</a>
          </Link>
          {/* <Link href="/bookmarks" as="/bookmarks" passHref>
            <a className="black-link">Закладки</a>
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">
          <a
            href="https://twitter.com/notsokolov"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            @twitter
          </a>
          <a
            href="https://instagram.com/notsokolov"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            @instagram
          </a>
          <a
            href="https://guthub.com/notsokolov"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            @github
          </a>
        </div>
      </div>
    </CenteredColumn>
  );
}
