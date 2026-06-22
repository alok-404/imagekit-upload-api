import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData(e.target);

  

    axios.post("http://localhost:3000/upload",formData)
    .then((res)=>{
        console.log(res.data.post);

        alert("Post created successfully")
        
    })
    .catch((err)=>{
        console.log(err);
        alert("Error creating post")
        
    })
  };
  return (
    <section className="max-w-md mx-auto mt-10 p-8 bg-zinc-800 rounded-3xl shadow-2xl border border-zinc-700">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Create Post
      </h1>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-col gap-6"
      >
        {/* File Input Style */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400 font-medium">
            Select Image
          </label>
          <input
           
            type="file"
            name="postUrl"
            accept="image/*"
            className="block w-full text-sm text-zinc-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
          />
        </div>

        {/* Caption Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400 font-medium">Caption</label>
          <input
          
            type="text"
            name="caption"
            placeholder="What's on your mind?"
            required
            className="w-full p-4 rounded-xl bg-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all active:scale-95 mt-2"
        >
          Post Now
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
