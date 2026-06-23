import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-8">
      <h1 className="text-5xl font-extrabold text-white">
        Welcome to <span className="text-indigo-500">ImageKit-Upload-API</span>
      </h1>
      <p className="text-zinc-400 text-lg">
        Manage your gallery, view beautiful pictures, and share your moments.
      </p>

      <div className="flex gap-4">
        <Link
          to="/create-post"
          className="px-8 py-3 bg-indigo-600 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Create Post
        </Link>
        <Link
          to="/feed"
          className="px-8 py-3 bg-zinc-700 rounded-full font-semibold hover:bg-zinc-600 transition"
        >
          Go to Feed
        </Link>
      </div>
    </div>
  )
}

export default Home