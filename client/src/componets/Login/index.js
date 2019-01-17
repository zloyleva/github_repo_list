import React, {Component} from 'react';
import axios from "axios";
import {Redirect} from "react-router-dom";


export default class Login extends Component {
    
    state = {
	    email: "",
        password: "",
	    isLogin: this.props.isLogin
    };
    
    loginHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
	
	    axios.post(`http://localhost/api/login`, this.state)
		    .then(response => {
			    console.log(response);
			    
			    if(response.status === 200){
			        sessionStorage.setItem("token",response.data.access_token);
				    this.props.setLoginStatus(true);
                }
			    
		    })
		    .catch(error => {
			    console.log(error);//Todo add show error
		    });
    };
    
    onLoginChange = (e) => {
        this.setState({
	        email: e.target.value
        });
    };
	
	onPasswordChange = (e) => {
		this.setState({
			password: e.target.value
		});
	};
	
	render() {
		if(this.state.isLogin){
			return (<Redirect push to="/" />)
        }else {
			return (
				<div className="card">
					<div className="card-header">Login</div>
					<div className="card-body">
						<form onSubmit={this.loginHandler}>
							<div className="form-group row">
								<label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
								
								<div className="col-md-6">
									<input id="email" type="email"
									       className="form-control"
									       name="email" required autoFocus
									       onChange={this.onLoginChange}
									       value={this.state.email}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
								
								<div className="col-md-6">
									<input id="password" type="password"
									       className="form-control"
									       name="password" required
									       onChange={this.onPasswordChange}
									       value={this.state.password}
									/>
								</div>
							</div>
							<div className="form-group row mb-0">
								<div className="col-md-8 offset-md-4">
									<button type="submit" className="btn btn-primary">
										Login
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			);
        }
        
    }
}
