import React from 'react';
function Home () {
    const clickMe = (a)=>{
        alert('hi'+ a)
    }
    return ( 
        <div className="home">
                <button onClick={(e)=>clickMe(e.target)}>click me</button>
        </div>
     );
}
 
export default Home;