const BlogList = ({p, handleDelete}) => {
    return ( 
        <h3>
        {p.map(
            (post)=>( <div>
                <div>name:{post.title}</div>
                <div>age:{post.author}</div>
                <button onClick={()=>handleDelete(post.id)}>delete this</button>
                <br></br>
                </div>
            )
        )}
    </h3>
     );
}
 
export default BlogList;