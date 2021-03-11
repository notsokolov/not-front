import React from "react";
import { format, TDate } from "timeago.js";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import ru from "timeago.js/lib/lang/ru";

timeago.register("ru", ru);

export function UpdatedAt({ updatedAt }: { updatedAt: TDate }) {
  console.debug(updatedAt);
  return <TimeAgo datetime={updatedAt} locale="ru" />;
}
