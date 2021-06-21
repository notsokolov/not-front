import React from "react";
// import { Post } from "~/graphql/types.generated";

export function PostTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}
