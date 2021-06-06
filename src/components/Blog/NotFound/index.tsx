import * as React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Пост не найден</h1>
      <Link href={"/blog"} passHref>
        <a>&larr; Назад к Блогу</a>
      </Link>
    </>
  );
}
