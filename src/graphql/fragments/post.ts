import { gql } from "@apollo/client";

export const PostInfoFragment = gql`
  fragment PostInfo on Post {
    id
    _id
    title
    slug
    updatedAt
    excerpt

  }
`;
