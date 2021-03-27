import * as React from "react";
import { getTint } from "../../../lib/getTint";

interface TimelineEntryProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  published_at: string;
  Icon: React.ElementType;
  tint?: string;
  divider?: boolean;
}

export function TimelineEntry({
  children = null,
  title,
  published_at,
  Icon,
  tint = "gray",
  divider = true,
}: TimelineEntryProps) {
  return (
    <div className="flex mb-12 md:mb-12">
      <div className="flex flex-col items-center">
        <div
          className={`flex justify-center p-3 rounded-full align-center border-4 border-gray-50 dark:border-gray-1000 ${getTint(
            tint
          )}`}
        >
          <Icon size={16} />
        </div>
        {divider && (
          <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-12 dark:bg-gray-800 timeline-stroke" />
        )}
      </div>

      <div className="flex flex-col flex-1 ml-4 space-y-4">
        <div className="flex flex-col pt-1 contents-center">
          <span className="font-medium text-primary">{title}</span>
          {published_at && (
            <span className="text-sm text-tertiary">{published_at}</span>
          )}
        </div>
        <div className="flex flex-col space-y-4 timeline-full-width">
          {children}
        </div>
      </div>
    </div>
  );
}
