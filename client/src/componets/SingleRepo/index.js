import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Link, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";

export default class SingleRepo extends Component {
	
	state = {
		repo: {},
		isLogin: this.props.isLogin,
		repoRate: null
	};
	
	fetchRepoData = async () => {
		const {owner, repo} = this.props.match.params;
		const {id} = this.state;
		
		const token = sessionStorage.getItem("token");
		if(token) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			
			try {
				const response = await axios.get(`http://localhost/api/repo/${owner}/${repo}`);
				if (await response.status === 200) {
					const data = await response.data.data;
					// console.log(data);
					this.setState({
						repo: response.data.data
					});
					return response.data.data;
				}
			} catch (e) {
				console.log(e.response);
				console.log(e.response.data.message);
				if (e.response.status === 401) {
					this.props.setLoginStatus(false);
				}
			}
			
		}
	};
	
	fetchRepoRate = async (repo) => {
		console.log("repo",repo);
		if(repo.id > 0){
			try {
				const response = await axios.post(`http://localhost/api/rate/show`, {repo_id: repo.id});
				if (await response.status === 200) {
					const data = await response.data;
					console.log(data);
					this.setState({
						repoRate: data
					});
				}
			} catch (e) {
				console.log(e.response);
				console.log(e.response.data.message);
			}
		}
	};
	
	componentDidMount = async() => {
		
		this.fetchRepoData().then(res => {
			this.fetchRepoRate(res);
		});
	};

	
	render() {
		const {isLogin,repoRate} = this.state;
		
		if(isLogin){
			
			if(Object.keys(this.state.repo).length){
				
				const {repo} = this.state;
				
				return (
					<div className="card">
						<div className="card-header">Repository by </div>
						
						<div className="card-body">
							
							<div className="media my-2">
								<div className="col-2">
									<img src={repo.owner.avatar_url} className="mr-3 w-100" alt=""/>
								</div>
								<div className="media-body col-8">
									<Link to={`/repo/${repo.owner.login}/${repo.name}`}>
										<h5 className="mt-0 Repo__Name">{repo.name}</h5>
									</Link>
									<div className="Repo__Author">{repo.owner.login}</div>
								</div>
								<div className="col-2 d-flex align-items-center justify-content-around">
									{
										repoRate?
											(
												<Fragment>
													<div>
														<FontAwesomeIcon icon={faThumbsUp} />{repoRate.rate_like}
													</div>
													<div>
														<FontAwesomeIcon icon={faThumbsDown} />{repoRate.rate_unlike}
													</div>
												</Fragment>
											):
											""
									}
									
								</div>
							</div>
						
						</div>
					</div>
				);
			}
			
			return (
				<div className="card">
					<div className="card-header">Repository by </div>
					
					<div className="card-body">
						
						<div className="media my-2">
							<p>No data yet</p>
						</div>
					
					</div>
				</div>
			)
			
		}else{
			return (<Redirect push to="/login" />)
		}
		
	}
}
