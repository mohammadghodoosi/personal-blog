import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {

  const{posts,loading,ermessage}=useFetch("http://localhost:8000/blogs")
  // const handleDelete = (a) => {
  //   let newBlogs = posts.filter((b) => b.id !== a);
  //   setPosts(newBlogs);
  // };

 

  return (
    <div className="home">
      {ermessage&&<div>{ermessage}</div>}
      {loading&&<h1>loading...</h1>}
      {posts&&<BlogList p={posts}  />}
    </div>
  );
}

export default Home;
