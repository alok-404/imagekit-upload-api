import React from 'react'
import CreatePost from './pages/CreatePost'
import { Route, Routes } from 'react-router-dom'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-zinc-900 text-white p-4'>
        <Routes>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/' element={<div className="flex items-center justify-center h-screen text-2xl font-bold">Home: Get Posts</div>} />
            <Route path='feed' element={<Feed/>}/>
        </Routes>
    </div>
  )
}

export default App