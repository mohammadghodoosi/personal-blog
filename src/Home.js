import React from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

function Home () {
    const [Name,setName]=useState('abbas')
    const [age,setAge]=useState(25)
    const [posts,setPosts]=useState([
    {name:'jalil',age:23},{name:'basir',age:33}]
    )
    const clickMe = ()=>{
        setName('ayub')
        setAge(35)
    }
    return ( 
        <div className="home">
            <div>i am {Name} and im {age} </div>
                <button onClick={(e)=>clickMe(e.target)}>click me</button>
             <BlogList p={posts}/>
             <BlogList p={posts.filter((a)=>a.age===33)}/>
        </div>
     );
}
 
export default Home