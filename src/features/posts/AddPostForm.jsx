import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

export default function AddPostform() {
  const dispatcher = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSubmit = title && content && userId;

  const submitHandler = (e) => {
    e.preventDefault();
    // check inputs are not empty
    if (canSubmit) {
      dispatcher(postAdded(title, content, userId));
      // reset inputs
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="stuff">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            onChange={onTitleChanged}
            value={title}
          />
        </div>

        <div className="stuff">
          <label htmlFor="desc">Description: </label>
          <input
            type="text"
            name="desc"
            onChange={onContentChanged}
            value={content}
          />
        </div>

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        <button type="submit" disabled={!canSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
