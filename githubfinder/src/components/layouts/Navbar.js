import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-danger">
                <h2>
                <i className="fa fa-github"></i>
                    Github Finder
                </h2>
                <ul>
                    <a>Home</a>
                    <a>About</a>
                </ul>
            </nav>
        )
    }
}

export default Navbar