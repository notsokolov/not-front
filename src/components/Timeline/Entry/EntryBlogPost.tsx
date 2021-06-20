import Link from "next/link";
import { TimelineEntry } from ".";
import { Edit2 } from "react-feather";

interface Props {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: Date;
  divider?: boolean;
}

export function EntryBlogPost({
  slug,
  title,
  excerpt,
  updatedAt,
  divider = true,
}: Props) {
  return (
    <TimelineEntry
      title="Пост в блоге"
      color="blue"
      Icon={Edit2}
      date={updatedAt}
      divider={divider}
    >
      <Link passHref href={`/blog/${slug}`}>
        <a className="px-4 py-3 transition-shadow bg-blue-zalupa rounded shadow dark:bg-gray-900 hover:shadow-cardHover">
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
