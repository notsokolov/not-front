import React from "react";
import { format, TDate } from "timeago.js";

export function UpdatedAt({ updatedAt }: { updatedAt: TDate }) {
  return <p className="p-small">Updated {format(updatedAt)}</p>;
}
