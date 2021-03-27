import * as React from "react";
import { BatteryCharging } from "react-feather";
import { Year2020 } from "./2020";
import { TimelineEntry } from "./Entry";

export function Timeline() {
  return (
    <div className="flex flex-col w-full timeline-container">
      {/* <TimelineEntry
        title="Work in progress..."
        published_at="More timeline entries coming soon"
        Icon={BatteryCharging}
        tint="yellow"
        divider={false}
      /> */}
      <Year2020 />
    </div>
  );
}
