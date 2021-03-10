import React from "react";
import { format, TDate } from "timeago.js";

export function UpdatedAt({ updatedAt }: { updatedAt: TDate }) {
  console.debug(updatedAt);
  return <p className="p-small">Updated {format(updatedAt)}</p>;
}
