import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect6() {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    setIdFromBtn(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtn]);

  return (
    <>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control border border-3"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleClick}>
            Fetch Post
          </button>
        </div>
      </form>
      <br />
      {/* <ul className="list-group">
        {post.map((p) => (
          <li className="list-group-item" key={p.id}>
            {p.title}
          </li>
        ))}
      </ul> */}
      <h2>{post.title}</h2>
    </>
  );
}

export default UseEffect6;
