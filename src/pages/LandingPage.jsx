import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import DataList from "../components/DataList";
import "../index.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function LandingPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  
  const updateFirstTwo = () => {
    setPosts(prev =>
      prev.map((item, index) => {
        if (index === 0 || index === 1) {
          return { ...item, title: item.title + " ✅ UPDATED:" };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Navbar />
      <MainContent onFetch={fetchPosts} onUpdate={updateFirstTwo} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <DataList posts={posts} />

      <Footer />
    </>
  );
}

export default LandingPage;
