import { PostInfoFragment } from "../../fragments/post";
import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Posts($slug: String!) {
    posts {
      ...PostInfo
    }
  }
  ${PostInfoFragment}
`;

// export const GET_POST = gql`
//   query Post($slug: String!, $first: Int) {
//     post(id: first){
//       ...PostInfo
//     }
//   }
//   ${PostInfoFragment}
// `;
