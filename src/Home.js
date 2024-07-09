import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {

  const [posts, setPosts] = useState(null);
  const [loading,setLoading]=useState(true);
  const [ermessage,setErmessage]=useState(null)



  const handleDelete = (a) => {
    let newBlogs = posts.filter((b) => b.id !== a);
    setPosts(newBlogs);
  };


  useEffect(() => {
    setTimeout(()=>{
      fetch("http://localhost:8000/blogs").then(
        data=> {return data.json()}
       ).then(data=>{ setPosts(data); setLoading(false)}).catch(
        err=>{setErmessage(err.message);setLoading(false)}
       )   
    },1000)
  }, []);

  return (
    <div className="home">
      {ermessage&&<div>{ermessage}</div>}
      {loading&&<h1>loading...</h1>}
      {posts&&<BlogList p={posts} handleDelete={handleDelete} />}
    </div>
  );
}

export default Home;
