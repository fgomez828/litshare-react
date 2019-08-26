import React, { Component } from 'react';
import LoginRegisterContainer from './LoginRegisterContainer';
import UserInfoContainer from './UserInfoContainer'

class UsersContainer extends Component {
	constructor() {
		super()
		this.state = {
			registered: true,

		}
	}

	handleClick = (e) => {
		this.props.toggleLogin()
	}

	toggleRegistered = (e) => {
		this.setState({
			registered: !this.state.registered
		})
	}

	render() {
		console.log("this is propsin UsersContainer below:");
		console.log(this.props);
	// 	console.log("this is statein UsersContainer below:");
	// 	console.log(this.state);
		return(
			<div>
				<div>
					{this.props.loggedIn ? 
						<div>
							<UserInfoContainer 
								{...this.props}
								displayedUser={this.props.displayedUser}
							/> 
						</div> :
						<div>
							<LoginRegisterContainer 
								{...this.props}
								registered={this.state.registered}
							/>
							<button 
								onClick={this.toggleRegistered}>{this.state.registered ? "Need to Register?" : "Already Have an Account?" }
							</button>
						</div>
					}
				</div>
			</div>
		)
	}
}

export default UsersContainer