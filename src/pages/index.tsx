import * as React from "react";
import { CenteredColumn } from "~/components/CenteredColumn";
import { Timeline } from "~/components/Timeline";
// import Link from "next/link";
// import { Timeline } from "~/components/Timeline";
import { StripeBG } from "../components/StripeBG";

function Home() {
  return (
    <>
      <StripeBG />
      <CenteredColumn>
        <Timeline />
      </CenteredColumn>
    </>
  );
}

export default Home;
