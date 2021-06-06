import React from "react";
import { PostTitle } from "../PostTitle";
import { UpdatedAt } from "../UpdatedAt";

interface Props {
  title: string;
  updatedAt: Date;
}

export function PostHeader({ title, updatedAt }: Props) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <PostTitle title={title} />
        <p className="p-small">
          Обновлено <UpdatedAt updatedAt={updatedAt} />
        </p>
      </div>
    </>
  );
}
