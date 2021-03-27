import * as React from "react";

export function EntriesForMonth({ month }: any) {
  return (
    <div className="flex items-center mb-8 timeline-item">
      <div className="w-12 mr-4 bg-gray-200 flex-0 dark:bg-gray-800 timeline-stroke" />
      <p className="text-lg font-bold">{month}</p>
      <div className="flex-1 h-px ml-4 bg-gray-200 dark:bg-gray-800 timeline-stroke" />
    </div>
  );
}
