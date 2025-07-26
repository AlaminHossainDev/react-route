import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    }, [])

    return(
        <div className="friends">
            <h2>Friends</h2>
            <p>Totall Friends:{friends.length} </p>
            {
            friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    )
}


/**
 * 1.state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 */