import { getPosts, getPost } from "~/graphql/resolvers/queries/blog";

export default {
  posts: getPosts,
  post: getPost,
};
