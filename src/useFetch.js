import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [posts, setPosts] = useState(null);
  const [loading,setLoading]=useState(true);
  const [ermessage,setErmessage]=useState(null)

    useEffect(() => {
        setTimeout(()=>{
          fetch(url).then(
            data=> {return data.json()}
           ).then(data=>{ setPosts(data); setLoading(false)}).catch(
            err=>{setErmessage(err.message);setLoading(false)}
           )   
        },1000)
      }, []);
    return ( {posts,loading,ermessage} );
}
 
export default useFetch;