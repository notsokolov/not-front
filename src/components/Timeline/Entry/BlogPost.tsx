import * as React from "react";
import Link from "next/link";
import { TimelineEntry } from ".";
import { Edit2 } from "react-feather";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  published_at: string;
  divider?: boolean;
}

export function BlogPost({
  slug,
  title,
  excerpt,
  published_at,
  divider = true,
}: Props) {
  return (
    <TimelineEntry
      title="Blog Post"
      // tint="yellow"
      Icon={Edit2}
      published_at={published_at}
      divider={divider}
    >
      <Link passHref href={`/blog/${slug}`}>
        <a className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-cardHover">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">{title}</p>
              <p className="font-normal text-tertiary">{excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </TimelineEntry>
  );
}
