import React from "react";
// import { Post } from "~/graphql/types.generated";

export function PostTitle({ title  } : {title : string}) {
  return (
    <div className="flex flex-col space-y-4">
      <h1>{title}</h1>
    </div>
  );
}
