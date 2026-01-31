import React from "react";
import "../index.css";

export default function DataList({ posts = [] }) {
     if (!posts.length) return null;

  return (
    <div className="list">
      <h3>Posts</h3>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}
            className={post.isUpdated ? "red-text" : ""}>
            <strong >{post.id}.</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

