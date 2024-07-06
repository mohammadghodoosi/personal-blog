import React from 'react';
import { useState } from 'react';

function Home () {
    const [Name,setName]=useState('abbas')
    const [age,setAge]=useState(25)
    const clickMe = ()=>{
        setName('ayub')
        setAge(35)
    }
    return ( 
        <div className="home">
            <div>i am {Name} and im {age} </div>
                <button onClick={(e)=>clickMe(e.target)}>click me</button>
        </div>
     );
}
 
export default Home;