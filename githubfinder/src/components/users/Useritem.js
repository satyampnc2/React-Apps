import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export class Useritem extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
        this.props.getRepos(this.props.match.params.login)
    }
    render() {
        const {company,bio,avatar_url,login,email,followers,following,public_repos,public_gists,html_url,name,location} = this.props.user;
        const repos = this.props.repos;
        // console.log(repos);
        return (
            <Fragment>
                <Link to={'/'}><button className="btn btn-dark mx-2">Back To Search</button></Link>
                <div className="card mx-2">
                    <div className="grid-2">
                        <div className="all-center">
                            <img src={avatar_url} alt="profile_image" className="round-img" style={{width:'150px'}}/>
                            <h1>{name}</h1>
                            { location && <p><i className="fa fa-map-marker" aria-hidden="true"></i>{' '}{location}</p> }
                        </div>
                        <div className="all-center">
                            {bio && <p>Bio:{' '}{bio}</p>}
                            <p><i className="fa fa-user" aria-hidden="true"></i>{' '}{login}</p>
                            <p><i className="fa fa-building-o" aria-hidden="true"></i>{' '}Company:{' '} {company}</p>
                            {email && <p>Email:{' '}{email}</p>}
                            <a href={html_url} className="btn btn-dark my-1">Github profile</a>
                        </div>
                    </div>
                </div>
                <div className="card m-2 text-center">
                    <div className="badge bg-success">Following:{' '}{following}</div>
                    <div className="badge bg-primary">Followers:{' '}{followers}</div>
                    <div className="badge bg-danger">Public Gists:{' '}{public_gists}</div>
                    <div className="badge bg-dark">Public Repos:{' '}{public_repos}</div>
                </div>
                <div className="card m-2">
                    <div className="text-left my-1"><h2>Repos</h2></div>
                    {/* <div className="list">
                        {
                            repos.map(repo => <li ><a className="text-dark" href={repo.html_url}>{repo.name}</a></li> )
                        }
                    </div> */}
                    <div className="grid-3">
                        {
                            repos.map(repo => <li ><i className="fa fa-code-fork" aria-hidden="true"></i>{' '}<a className="badge bg-success px-2" href={repo.html_url}>{repo.name}</a></li> )
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Useritem
