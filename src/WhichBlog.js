import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import BlogList from "./BlogList";


const WhichBlog = () => {
    const {id}=useParams()
    const {posts,loading,erm}=useFetch('http://localhost:8000/blogs/'+id)
    return (<div>
            <div className="home">
      {erm&&<div>{erm}</div>}
      {loading&&<h1>loading...</h1>}
      {posts&&<div>{posts.body}</div>}
    </div>
    </div> );
}
 
export default WhichBlog;