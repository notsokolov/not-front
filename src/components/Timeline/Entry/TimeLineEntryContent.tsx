import React from "react";

export function TimeLineEntryContent({ title, published_at, children }) {
  return (
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
  );
}
