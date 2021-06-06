import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Label } from "./style";

import { Links } from "~/components/Links";
interface Props {
  activeRoute: string;
  setExpanded: any;
}

export function NavLinks({ activeRoute, setExpanded }: Props) {
  return (
    <React.Fragment>
      {Links.map((link) => {
        return (
          <Label
            Links
            key={link.activeRoute}
            isActive={activeRoute == link.activeRoute}
          >
            <Link href={link.href}>
              <a onClick={() => setExpanded(false)}>{link.title}</a>
            </Link>
          </Label>
        );
      })}
    </React.Fragment>
  );
}
