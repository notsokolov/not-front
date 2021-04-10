import * as React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Post not Found</h1>
      <Link href={"/blog"} passHref>
        <a>&larr; Back to Blog</a>
      </Link>
    </>
  );
}
