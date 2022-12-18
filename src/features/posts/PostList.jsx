import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import SinglePost from "./SinglePost";

export default function PostList() {
  const dispatcher = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatcher(fetchPosts());
    }
  }, [postStatus]);

  // render dependant on the result of the fetch
  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    // not abig fan of the extra resources used in ordering the posts tho..
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <SinglePost key={post.id} {...{ post }} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="center">Posts</h2>
      <section className="postsContainer col">{content}</section>
    </div>
  );
}
