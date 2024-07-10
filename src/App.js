import Navbar from './Navbar';
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import WhichBlog from './WhichBlog';

function App() {
  return (
    <Router>
       <div className="App">
        <div className='head'>
            <Navbar />
        </div>
        <div className='content'>
        <Switch >
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/Blogs/:id'> 
            <WhichBlog/>
          </Route>
        </Switch>
        </div>
      
       
    </div>
    </Router>
   
  );
}

export default App;
