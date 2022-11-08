import axios from "axios";
import React from "react";

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { post: res.data },
  };
}

const SSG = ({ post }) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Post</h1>
        {post.map((e) => (
          <div className="col-lg-6" key={e.id}>
            <div className="card mt-3 p-3">
              <h5>{e.title}</h5>
              <p>{e.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SSG;
