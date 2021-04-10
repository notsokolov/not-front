import Link from "next/link";
import React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { PageHeader } from "../PageHeader";

export function StripeBG() {
  return (
    <header>
      <CenteredColumn>
        <div className=" flex flex-col space-y-24">
          <div className="intro flex flex-col space-y-8 md:items-center">
            <PageHeader
              title="🐙 Привет, я Алексей!"
              subtitle="JavaScript-разработчик из Санкт-Петербурга. Делаю приложения на Node.js и для браузера."
            />
            <div className="flex flex-col space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
              <Link href="/about" passHref>
                <a 
                rel="noopener noreferrer"
                >
                  <button className="w-full btn-primary btn text-lg btn-large font-normal rounded">
                    Мое Резюме
                  </button>
                </a>
              </Link>
              <Link 
                href="https://t.me/alexqlur"
                passHref>

              <a
                target="_blank"
                rel="noopener noreferrer"
              > 
                <button className="w-full text-lg btn btn-large font-normal rounded">
                  Написать в Telegram
                </button>
              </a>
              </Link>

            </div>
          </div>
        </div>
      </CenteredColumn>
      <div className="StripeGrid anchorBottom  ">
        <div className="backgroundContainer">
          <div className="grid">
            <div className="background bg-primary"></div>
          </div>
        </div>

        <div className="stripeContainer">
          <div className="grid">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
