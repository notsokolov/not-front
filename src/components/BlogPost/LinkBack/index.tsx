import React from "react";
import Link from "next/link";

export function LinkBack() {
  return (
    <div className="mb-1">
      <Link href="/blog">
        <a className="leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">
          ‹‹ Back to blog!
        </a>
      </Link>
    </div>
  );
}
