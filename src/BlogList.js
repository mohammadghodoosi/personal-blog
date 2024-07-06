const BlogList = ({p}) => {
    return ( 
        <h3>
        {p.map(
            (post)=>(
                <div>name:{post.name}</div>
            )
        )}
    </h3>
     );
}
 
export default BlogList;