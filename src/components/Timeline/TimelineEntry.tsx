import * as React from "react";
import { getTint } from "./getTint";

export interface TimelineEntryProps {
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  timestamp?: string;
  Icon: React.ReactType;
  tint?: string;
  divider?: boolean;
}

export function TimelineEntry({
  children = null,
  title,
  timestamp,
  Icon,
  tint = "gray",
  divider = true,
}: TimelineEntryProps) {
  return (
    <div className="flex mb-12 md:mb-12 timeline-item">
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
          {timestamp && (
            <span className="text-sm text-tertiary">{timestamp}</span>
          )}
        </div>
        <div className="flex flex-col space-y-4 timeline-full-width">
          {children}
        </div>
      </div>
    </div>
  );
}
