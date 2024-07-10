import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [posts, setPosts] = useState(null);
  const [loading,setLoading]=useState(true);
  const [erm,setErm]=useState(null)

    useEffect(() => {
        setTimeout(()=>{
          fetch(url).then(
            data=> {return data.json()}
           ).then(data=>{ setPosts(data); setLoading(false)}).catch(
            err=>{setErm(err.message);setLoading(false)}
           )   
        },1000)
      }, []);
    return ( {posts,loading,erm} );
}
 
export default useFetch;