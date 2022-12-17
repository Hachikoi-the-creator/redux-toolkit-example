import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

export default function PostList() {
  const posts = useSelector(selectAllPosts);

  // ? cleaner return
  const articlesMapping = posts.map((e) => (
    <article key={e.id} className="col post">
      <h3>{e.title}</h3>
      <p>{e.content}</p>
      <p className="postCredit">
        <PostAuthor userId={e.userId} />
        <TimeAgo timestamp={e.date} />
      </p>
    </article>
  ));

  return (
    <div>
      <h2 className="center">Posts</h2>
      <section className="postsContainer col">{articlesMapping}</section>
    </div>
  );
}
