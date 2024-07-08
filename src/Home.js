import React, { useState, useEffect, useRef } from 'react';
import BlogList from './BlogList';

function Home() {
  const isInitialRender = useRef(true);
  const [name, setName] = useState('abbas');
  const [age, setAge] = useState(25);
  const [posts, setPosts] = useState(null);
  const [loading,setLoading]=useState(true);

  const handleDelete = (a) => {
    let newBlogs = posts.filter((b) => b.id !== a);
    setPosts(newBlogs);
  };

  const changeAge = () => {
    setAge(44);
  };

  useEffect(() => {
    setTimeout(()=>{
      fetch("http://localhost:8000/blogs").then(
        data=> {return data.json()}
       ).then(data=>{ setPosts(data); setLoading(false)})    
    },1000)
  }, []);

  return (
    <div className="home">
      <button onClick={changeAge}>Change age</button>
      {loading&&<h1>loading...</h1>}
      {posts&&<BlogList p={posts} handleDelete={handleDelete} />}
    </div>
  );
}

export default Home;
