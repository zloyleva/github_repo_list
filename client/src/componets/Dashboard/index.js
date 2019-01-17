import React, {Component} from 'react';
import axios from 'axios';
import RepoListElement from "../RepoListElement";
import {Redirect} from "react-router-dom";

import _ from 'lodash';

export default class Dashboard extends Component {
	state = {
		repos: [],
		isLogin: this.props.isLogin
	};
	
	componentDidMount = async() => {
	    const token = sessionStorage.getItem("token");
	    if(token){
		    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		
		    try {
			    const response =  await axios.get("http://localhost/api/repo");
			    if(await response.status === 200){
				    const data = await response.data.data;
				    console.log(data);
				    this.setState({
					    repos: data
				    });
			    }
		    }catch (e) {
			    console.log(e.response);
			    console.log(e.response.data.message);
			    if(e.response.status === 401){
				    this.props.setLoginStatus(false);
			    }
		    }
		
		
		    /**
		     * Get all repos rate data in local DB
		     * @type {any}
		     */
		    try {
			    const repos_id = this.state.repos.map(el => el.id);
			    const res =  await axios.post("http://localhost/api/rate",{"repos_id": repos_id});
			    if(await res.status === 200){
				    const reposRate = await res.data;
				    console.log(reposRate);
				    this.addFetchRateToRepoHandler(reposRate);
			    }
		    }catch (e) {
			    console.log(e.response.data.message);
		    }
		    
	    }
    };
	
	/**
	 * Set rate for all repos from fetched data
	 * @param reposRate
	 */
	addFetchRateToRepoHandler = (reposRate) => {
		const preparedRepos = this.state.repos.map(el => {
			let rateRepo = _.find(reposRate, {repo_id: el.id});
			return {...el,status:(rateRepo)?rateRepo.status:el.status}
		});
		
		this.setState({
			repos: preparedRepos
		})
	};
	
	setRateToSingleRepo = async ({repo_id,status}) => {
		console.log("setRateToSingleRepo",{repo_id,status});
		
		const token = sessionStorage.getItem("token");
		if(token){
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			
			try {
				const res =  await axios.put("http://localhost/api/rate",{repo_id: repo_id, status:status});
				const data = await res.data;
				if(await res.status === 200){
					const data = await res.data;
					console.log(data);
					this.addFetchRateToRepoHandler([data]);
					return false;
				}
			}catch (e) {
			
			}
		}
		
	};
    
    createRepoHTMLList = () => {
    	const {repos} = this.state;
    	if(repos.length){
		    return repos.map(repo => (<RepoListElement
			    key={repo.id}
			    repo={repo}
			    setRateToSingleRepo={this.setRateToSingleRepo}/>))
	    }else {
    		return (
			    <div className="media my-2">
				    Waiting for data...
			    </div>
		    )
	    }
    	
    };
	
	render() {
		const {isLogin} = this.state;
		
		if(isLogin){
			return (
				<div className="card">
					<div className="card-header">Repositories List</div>
					
					<div className="card-body">
						
						{this.createRepoHTMLList()}
					
					</div>
				</div>
			);
		}else{
			return (<Redirect push to="/login" />)
		}
    
    }
}
