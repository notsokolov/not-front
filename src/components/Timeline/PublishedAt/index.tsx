import React from "react";
import { TDate } from "timeago.js";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import ru from "timeago.js/lib/lang/ru";

timeago.register("ru", ru);

export function PublishedAt({ updatedAt }: { updatedAt: TDate }) {
  return <TimeAgo datetime={updatedAt} locale="ru" />;
}
