import Link from "next/link";
import { CenteredColumn } from "../CenteredColumn";
import { Links, socialLinks } from "~/components/Links";

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
      <div className="grid grid-cols-1 gap-4 px-6 py-20  sm:grid-cols-3 dark:bg-gray-900 sm:dark:bg-gray-1000">
        <div className="flex flex-col space-y-4">
          {Links.map((navLink) => {
            return (
              <Link
                href={navLink.href}
                as={navLink.href}
                passHref
                key={navLink.href}
              >
                <a className="black-link">{navLink.title}</a>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col space-y-4">
          {socialLinks.map((socialLink) => {
            return (
              <a
                href={socialLink.href}
                className="black-link"
                target="_blank"
                rel="noopener noreferrer"
                key={socialLink.href}
              >
                @{socialLink.name}
              </a>
            );
          })}
        </div>
      </div>
    </CenteredColumn>
  );
}
