import { useEffect, useState } from "react"
import Post from "./Post";

export default function DataLoad(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return(
        <div>
            <h1>DataLoading</h1>
            <p>Totall Post :{posts.length} </p>
            {
                posts.map(post => <Post post={post} ></Post> )
            }
        </div>
    )
}

/**
 * Data Loading process
 * 1. create a state to store the data
 * 2. create use effect with no dependencies
 */