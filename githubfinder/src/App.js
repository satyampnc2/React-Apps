import React,{Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import axios from 'axios';
import Users from './components/users/Users';
import Search from './components/layouts/Search';
import Spinner from './components/layouts/Spinner';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'; 
import Useritem from './components/users/Useritem'
class App extends Component {
  constructor(){
    super()
    this.state = {
      users : [],
      searchText:'',
      isLoading :false,
      user : {},
      repos:[]
    }
  }
  getSearchText = async (text) => {
    await this.setState({isLoading:true})
    await this.setState({searchText:text})
    const users = await axios.get(`https://api.github.com/search/users?q=${this.state.searchText}`);
    await this.setState({users:users.data.items,isLoading:false})
  }

  getUser = async (login) => {
    await this.setState({isLoading:true})
    const user = await axios.get(`https://api.github.com/users/${login}`);
    await this.setState({user:user.data,isLoading:false})
  }

  getRepos = async (login) => {
    const repos = await axios.get(`https://api.github.com/users/${login}/repos?per_page=7`);
    await this.setState({repos:repos.data,isLoading:false})
    console.log(this.state.repos)
  }

  clearUsers = () => {
    this.setState({users:[]})
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" render = { props => <Fragment>
            <Search getSearchText={this.getSearchText} users={this.state.users} clearUsers={this.clearUsers} />
            {(this.state.isLoading) && <Spinner/>}
            <Users users={this.state.users} clearUsers={this.clearUsers}/>
          </Fragment>} />
          <Route exact path="/users/:login" render = { props => <Useritem 
          {...props} 
          getUser={this.getUser}
          user={this.state.user}
          getRepos={this.getRepos}
          repos={this.state.repos}
          /> } />
        </div>
      </Router>
    )
  }
}

export default App

