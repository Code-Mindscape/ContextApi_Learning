import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function profile() {
    const { user } = useContext(UserContext)
    if(!user) return <div>Please Login</div>

    return (
        <div>
            <h1>Welcome {user.username}</h1>
        </div>
    )
}

export default profile