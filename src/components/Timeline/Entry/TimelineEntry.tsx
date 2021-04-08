import * as React from "react";
import { TimeLineEntryContent } from "./TimeLineEntryContent";
import { TimeLineEntryIcon } from "./TimeLineEntryIcon";

interface TimelineEntryProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  published_at: string;
  Icon: any; //React.ElementType;
  color?: string;
  divider?: boolean;
}

export function TimelineEntry({
  children = null,
  title,
  published_at,
  Icon,
  color = "gray",
  divider = true,
}: TimelineEntryProps) {
  return (
    <div className="flex mb-12 md:mb-12">
      <TimeLineEntryIcon Icon={Icon} color={color} divider={divider} />
      <TimeLineEntryContent title={title} published_at={published_at}>
        {children}
      </TimeLineEntryContent>
    </div>
  );
}
