import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faSpinner } from '@fortawesome/free-solid-svg-icons'

import './style.css';

export default class RepoListElement extends Component {
	state = {
		isSetRate: false
	};
	
	setRateHandler = (status) => {
		const {repo} = this.props;
		
		console.log("setRateHandler",status);
		this.setState({
			isSetRate: true
		});
		const isLoading = this.props.setRateToSingleRepo({
			repo_id: repo.id,
			status: status
		});
		
		isLoading
			.then(res => this.setState({
				isSetRate: res
			}))
		
	};
	
	render() {
		
		const {repo} = this.props;
		const {isSetRate} = this.state;
		
		const statusData = {like: "", unlike: ""};
		
		switch (repo.status) {
			case 1:
				statusData.like = "active";break;
			case 0:
				statusData.unlike = "active";break;
			default:
			
		}
		
		return (
			<div className="media my-2 align-items-stretch">
				<div className="col-2">
					<img src={repo.owner.avatar_url} className="mr-3 w-100" alt=""/>
				</div>
				<div className="media-body col-7 col-lg-8">
					<Link to={`/repo/${repo.owner.login}/${repo.name}`}>
						<h5 className="mt-0 Repo__Name">{repo.name}</h5>
					</Link>
					<div className="Repo__Author">{repo.owner.login}</div>
				</div>
				<div className="col-3 col-lg-2 d-flex align-items-center justify-content-around Upload__Rate__Status__Section">
					
					{
						isSetRate?
							(
								<div className="Upload__Rate__Status d-flex justify-content-center align-items-center">
									<FontAwesomeIcon icon={faSpinner} spin/>
								</div>
							): ""
					}
					
					<button href="#" className={`Like__Control ${statusData.like} btn btn-outline-secondary`}
					        onClick={() => this.setRateHandler(1)} disabled={!!statusData.like}>
						<FontAwesomeIcon icon={faThumbsUp} />
					</button>
					<button href="#" className={`UnLike__Control ${statusData.unlike} btn btn-outline-secondary ml-1`}
					        onClick={() => this.setRateHandler(0)} disabled={!!statusData.unlike}>
						<FontAwesomeIcon icon={faThumbsDown} />
					</button>
				</div>
			</div>
		);
	}
}
