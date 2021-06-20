import { TimeLineEntryContent } from "./TimeLineEntryContent";
import { TimeLineEntryIcon } from "./TimeLineEntryIcon";

interface TimelineEntryProps {
  children?: React.ReactChild | React.ReactChild[];
  title?: string;
  date: Date;
  Icon: any; //React.ElementType;
  color?: string;
  divider?: boolean;
}

export function TimelineEntry({
  children = null,
  title,
  date,
  Icon,
  color = "gray",
  divider = true,
}: TimelineEntryProps) {
  return (
    <div className="flex mb-12 md:mb-12">
      <TimeLineEntryIcon Icon={Icon} color={color} divider={divider} />
      <TimeLineEntryContent title={title} date={date}>
        {children}
      </TimeLineEntryContent>
    </div>
  );
}
