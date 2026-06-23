import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data.post);
      toast.success("Post created successfully!");
      e.target.reset();
      navigate("/feed")
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto p-8 bg-zinc-800 rounded-3xl shadow-2xl border border-zinc-700">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Create Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400 font-medium">Select Image</label>
          <input
            type="file"
            name="postUrl"
            accept="image/*"
            required
            className="block w-full text-sm text-zinc-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
          />
        </div>

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

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 bg-indigo-600 text-white font-bold rounded-xl transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700 active:scale-95"
          }`}
        >
          {loading ? "Posting..." : "Post Now"}
        </button>
      </form>
      <ToastContainer theme="dark"/> 
    </section>
  );
};

export default CreatePost;