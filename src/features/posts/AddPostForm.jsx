import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
// import { selectAllUsers } from "../users/usersSlice";

export default function AddPostform() {
  const dispatcher = useDispatch();
  const [inputs, setInputs] = useState({ title: "", desc: "" });

  const updateInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // check inputs are not empty
    if (inputs.desc && inputs.title) {
      dispatcher(postAdded(inputs.title, inputs.desc));
      // reset inputs
      setInputs({ title: "", desc: "" });
    }
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="stuff">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            onChange={updateInputs}
            value={inputs.title}
          />
        </div>

        <div className="stuff">
          <label htmlFor="desc">Description: </label>
          <input
            type="text"
            name="desc"
            onChange={updateInputs}
            value={inputs.desc}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
