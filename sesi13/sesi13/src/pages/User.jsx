import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const User = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return(
        <div className="App">
            <div>
                <br />
                <button onClick={() => navigate('/')}>
                    Back To Home
                </button>
            </div>
            <br />
            
            <div>User List</div>
            {users.map(user => {
                return (
                    <>
                        <div>Name: {user.name}</div>   
                        <div>Email: {user.email}</div>
                        <br />
                    </>
                )
            })}
        </div>
    )
}

export default User