import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import this if you haven't!

const Feed = () => {
  const navigate = useNavigate();
  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        const fetchPosts = async () => {
      try {

        setError(null); 
   
        const res = await axios.get("http://localhost:3000/posts");
        
        setPosts(res.data.getPost || []); 
        toast.success("Welcome to Feed Page");
      } catch (err) {
        console.error(err);
        const errorMessage = err.response?.data?.message || err.message || "Failed to fetch posts";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Feed</h1>
      {isLoading && (
        <div className="flex justify-center mt-20 text-zinc-400">
          <p className="text-xl animate-pulse">Loading posts...</p>
        </div>
      )}

      {!isLoading && error && (
        <div className="flex flex-col items-center justify-center mt-20 text-red-400 gap-4">
          <h2 className="text-xl">Oops! Something went wrong.</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      )}
      
      {!isLoading && !error && posts.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-20 text-zinc-500 gap-4">
          <h2 className="text-xl">No posts to show right now!</h2>
          <p>Start by creating your first post.</p>
          <button
            onClick={() => navigate("/create-post")}
            type="button"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            CREATE POST
          </button>
        </div>
      )}

      {!isLoading && !error && posts.length > 0 && (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-zinc-800 p-4 rounded-xl border border-zinc-700"
            >
              <div className="w-full h-48 bg-zinc-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={post.postUrl}
                  alt={post.caption || "Post Image"}
                  className="object-cover h-full w-full"
                />
              </div>
              <p className="text-lg">{post.caption}</p>
            </div>
          ))}
        </div>
      )}
      
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Feed;