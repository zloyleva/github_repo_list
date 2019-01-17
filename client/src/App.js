import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Header from "./componets/Header";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Dashboard from "./componets/Dashboard";
import SingleRepo from "./componets/SingleRepo";
import axios from "axios";

export default class App extends Component {
	
	state = {
		repos: [],
		isLogin: true
	};
	
	componentDidMount = () => {
		if(!sessionStorage.getItem("token")){
			this.setState({
				isLogin: false
			});
		}
	};
	
	setLoginStatus = (status) => {
		this.setState({
			isLogin: !!status
		});
    };
    
    render() {
        
        const {isLogin,repos} = this.state;
        
        return (
            <Router>
                <Fragment>
                    <Header isLogin={isLogin} setLoginStatus={this.setLoginStatus}/>
        
                    <main className="py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <Route exact path="/"
                                           component={() => <Dashboard isLogin={isLogin} setLoginStatus={this.setLoginStatus}/>}/>
                                    <Route exact path="/repo/:owner/:repo"
                                           component={(props) => <SingleRepo {...props} isLogin={isLogin} setLoginStatus={this.setLoginStatus}/>}/>
                                    <Route exact path="/login"
                                           component={() => <Login isLogin={isLogin} setLoginStatus={this.setLoginStatus}/>}/>
                                    <Route exact path="/register"  component={Register} />
                                </div>
                            </div>
                        </div>
                    </main>
                </Fragment>
            </Router>
        );
    }
}
