import React from 'react'
import User from './User'

const Users = (props) => {
    const {users} = props;
    return (
        <div className="container">
            <div className="grid-3">
            {
                users.map(user => <User key={user.id} name={user.login} img={user.avatar_url} profileLink={user.html_url} />)
            }
            </div>
        </div>
        
    )
}

export default Users
