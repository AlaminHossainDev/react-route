import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] =useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div className="users">
            <h3>User data is here</h3>
            <p>Totall users: {users.length} </p>
        </div>
    )
}



/**
 * 1. declare a stat hold the data
 */