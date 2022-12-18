import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function PostList() {
  const posts = useSelector(selectAllPosts);

  // ? cleaner return
  const articlesMapping = posts.map((post) => (
    <article key={post.id} className="col post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons {...{ post }} />
    </article>
  ));

  return (
    <div>
      <h2 className="center">Posts</h2>
      <section className="postsContainer col">{articlesMapping}</section>
    </div>
  );
}
