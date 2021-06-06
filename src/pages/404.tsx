import Link from "next/link";
import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";

export default function Error404() {
  return (
    <CenteredColumn>
      <h2 className="text-center">Страница Не Найдена: Ошибка 404</h2>
      <Link href="/blog">
        <a className="leading-snug pt-6 text-center text-xl text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">
          ‹‹ Вернуться на главную
        </a>
      </Link>
    </CenteredColumn>
  );
}
