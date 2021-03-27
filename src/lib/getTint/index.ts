export function getTint(color: string) {
  if (!color) return;
  if (color == "gray") return "text-primary bg-gray-200 dark:bg-gray-800";
  return `text-${color}-800 dark:text-${color}-200 bg-${color}-500 bg-opacity-20`;
}
