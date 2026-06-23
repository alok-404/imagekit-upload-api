import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';
import Home from './pages/Home';



const App = () => {
  return (
    <div className='min-h-screen w-full pt-10 bg-zinc-900 text-white '>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/feed' element={<Feed />} />
        </Routes>
    </div>
  );
};

export default App;