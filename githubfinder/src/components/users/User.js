import React from 'react'
import {Link} from 'react-router-dom'
function User(props) {
    const {name,img} = props;
    return (
        <div className="card all-center"> 
            <img className="round-img" src={img} alt=""/>
            <div className="lead">{name}</div>
            <Link to={`/users/${name}`}><button className="btn btn-dark">More</button></Link>
        </div>
    )
}

export default User
