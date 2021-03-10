import React from "react";
// import { Post, UploadFile } from "~/graphql/types.generated";
import { PostImage } from "../PostImage";
import { PostTitle } from "../PostTitle";
import { UpdatedAt } from "../UpdatedAt";

interface Props {
  title: any;
  coverImage: any;
  updatedAt: any;
}

export function PostHeader({ title, coverImage, updatedAt }: Props) {
  return (
    <>
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
