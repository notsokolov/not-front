import React from "react";
import { TDate } from "timeago.js";
import { UploadFile } from "~/graphql/types.generated";
import { PostImage } from "../PostImage";
import { PostTitle } from "../PostTitle";
import { UpdatedAt } from "../UpdatedAt";

interface Props {
  title: string;
  coverImage: UploadFile;
  updatedAt: TDate;
}

export function PostHeader({ title, coverImage, updatedAt }: Props) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1>{title}</h1>
      </div>
      <div className="flex flex-col space-y-8">
        {coverImage && (
          <PostImage
            alt={title}
            src={`http://192.168.0.102:1337${coverImage.url}`}
          />
        )}
        <PostTitle title={title} />
        <UpdatedAt updatedAt={updatedAt} />
      </div>
    </>
  );
}
