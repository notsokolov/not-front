import React from "react";
import { PublishedAt } from "../PublishedAt";

export function TimeLineEntryContent({ title, date, children }) {
  return (
    <div className="flex flex-col flex-1 ml-4 space-y-4">
      <div className="flex flex-col pt-1 contents-center">
        <span className="font-medium text-primary">{title}</span>
        {date && (
          <span className="text-sm text-tertiary">
            <PublishedAt publishedAt={date} />
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-4 timeline-full-width">
        {children}
      </div>
    </div>
  );
}
