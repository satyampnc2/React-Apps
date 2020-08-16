import React, { Component } from 'react'

class Search extends Component {
    state = {
        text:'',
        clearDisplay:'false'
    }
    onChange = (e) => {
        this.setState({text:e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
        this.props.getSearchText(this.state.text);
        this.setState({text:''})
        this.setState({clearDisplay:'true'});
    }
    clearHandler = (e) => {
        e.preventDefault();
        this.props.clearUsers();
        this.setState({clearDisplay:'false'})
    }
    render() {
        return (
            <form className="mx-3 form-text" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search Users.." className="input" value={this.state.text} onChange={this.onChange}/>
                <input type="submit" className="btn btn-block btn-dark" value="Search"></input>
                { this.props.users.length > 0  && <button onClick={this.clearHandler} className="btn btn-block btn-light">Clear</button>}
            </form>
        )
    }
}

export default Search

