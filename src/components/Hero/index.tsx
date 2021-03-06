import Link from "next/link";
import React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PageHeader } from "../PageHeader";
import { StripeBG } from "~/components/StripeBG";

export function Hero() {
  return (
    <header className="StripeWrapper relative">
      <CenteredColumn>
        <div className=" flex flex-col space-y-24">
          <div className="pb-96 pt-16 text-center mx-auto flex flex-col space-y-8 md:items-center">
            <PageHeader
              title="🐙 Привет, я Алексей!"
              subtitle="JavaScript-разработчик из Санкт-Петербурга. Делаю приложения на Node.js и для браузера."
            />
            <div className="flex flex-col space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
              <Link href="/resume" passHref>
                <a rel="noopener noreferrer">
                  <button className="w-full btn-primary btn text-lg btn-large font-normal rounded">
                    Мое Резюме
                  </button>
                </a>
              </Link>
              <Link href="https://t.me/notsokolov" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="w-full text-lg btn btn-large font-normal rounded">
                    Написать в Telegram
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </CenteredColumn>
      <StripeBG />
    </header>
  );
}
