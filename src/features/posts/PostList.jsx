import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";

export default function PostList() {
  // const posts = useSelector((state) => state.posts.posts);
  const posts = useSelector(selectAllPosts);

  // ? cleaner return
  const articlesMapping = posts.map((e) => (
    <article key={e.id} className="col">
      <h3>{e.title}</h3>
      <p>{e.content}</p>
    </article>
  ));

  return (
    <div>
      <h2 className="center">Posts</h2>
      <section className="postsContainer col">{articlesMapping}</section>
    </div>
  );
}
