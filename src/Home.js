import React from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

function Home () {
    const [Name,setName]=useState('abbas')
    const [age,setAge]=useState(25)
    const [posts,setPosts]=useState([
    {name:'jalil',age:23, id:1},{name:'basir',age:33,id:2},{name:'saiid',age:88,id:3},{name:'hashem',age:93,id:4}]
    )
    const handleDelete=(a)=>{
        let newBlogs= posts.filter((b)=>b.id!==a)
        setPosts(newBlogs)
    }
    return ( 
        <div className="home">
             <BlogList p={posts} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home