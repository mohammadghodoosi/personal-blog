import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
    return ( 
        <div className="navbar">
            <h4>welcome to this personal blog</h4>
            <div className='links'>
            <Link to="/">home</Link>
            <Link to="/">blogs</Link>
            </div>
        </div>
     );
}
 
export default Navbar;