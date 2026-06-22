import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {

   
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const API = axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data.getPost);
    });
  }, []);

  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Feed</h1>

      {/* Error Handling / Conditional Rendering */}
      {posts.length > 0 ? (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-zinc-800 p-4 rounded-xl border border-zinc-700"
            >
              <div className="w-full h-48 bg-zinc-700 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={post.postUrl}
                  alt="Image Holder"
                  className=" object-cover h-full w-full"
                />
              </div>
              <p className="text-lg">{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        // Jab posts nahi honge toh ye dikhega
        <div className="flex flex-col items-center justify-center mt-20 text-zinc-500">
          <h2 className="text-xl">No posts to show right now!</h2>
          <p>Start by creating your first post.</p>
        </div>
      )}
    </div>
  );
};

export default Feed;
