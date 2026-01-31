import React from "react";

export default function MainContent({ onFetch, onUpdate }) {
  return (
     <main className="main">
      <h1>Welcome to Our Landing Page</h1>
      <p>
         React components, API fetching, and state updates.
      </p>

      <div className="buttons">
        <button onClick={onFetch}>Fetch / Reload Data</button>
        <button onClick={onUpdate}>Update First Two Rows</button>
      </div>
    </main>
  );
}