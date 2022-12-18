import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export default function SinglePost({ post }) {
  const { title, content, userId, date } = post;

  return (
    <article className="col post">
      <h3>{title}</h3>
      <p>{content}</p>
      <p className="postCredit">
        <PostAuthor userId={userId} />
        <TimeAgo timestamp={date} />
      </p>
      <ReactionButtons {...{ post }} />
    </article>
  );
}
