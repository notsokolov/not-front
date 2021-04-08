export function TimeLineEntryIcon({ Icon, divider, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex justify-center p-3 rounded-full align-center border-4 border-gray-50 dark:border-gray-1000 text-${color}-800 dark:text-${color}-200 bg-${color}-500 bg-opacity-20
        )}`}
      >
        <Icon size={16} />
      </div>
      {divider && (
        <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-12 dark:bg-gray-800 timeline-stroke" />
      )}
    </div>
  );
}
