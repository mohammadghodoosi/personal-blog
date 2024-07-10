import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({p, handleDelete}) => {
    return ( 
        <h3>
        {p.map(
            (post)=>( <Link to={`Blogs/${post.id}`}>
                <div>name:{post.title}</div>
                <div>age:{post.author}</div>
                <button onClick={()=>handleDelete(post.id)}>delete this</button>
                <br></br>
                </Link>
            )
        )}
    </h3>
     );
}
 
export default BlogList;