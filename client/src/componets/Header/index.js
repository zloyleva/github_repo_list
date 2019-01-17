import React, {Component, Fragment} from 'react';
import {Link, NavLink, Redirect} from "react-router-dom";
import axios from "axios";


export default class Header extends Component {
	
	logoutHandler = (e) => {
	    e.preventDefault();
		
		axios.post(`http://localhost/api/logout`, this.state)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);//Todo add show error
			});
		
		sessionStorage.removeItem("token");
		this.props.setLoginStatus(false);
    };
	
	render() {
		
		const {isLogin} = this.props;
	    
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">GitHub Repo Lister</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                        </li>

                        {
                            (isLogin)?
	                            <li className="nav-item">
		                            <a to="/logout" className="nav-link" onClick={this.logoutHandler}>Logout</a>
	                            </li>
                                :
                                <Fragment>
	                                <li className="nav-item">
		                                <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
	                                </li>
	                                <li className="nav-item">
		                                <NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink>
	                                </li>
                                </Fragment>
                        }
                        
                    </ul>
                </div>
            </nav>
        );
    }
}
