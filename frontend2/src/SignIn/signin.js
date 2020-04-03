import React, { Component } from 'react';
import './signin.css';
import { Route, Link } from 'react-router-dom'; 
import '../style.css';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
      <div class = "form-container">
          <div class = "orange-form">
				<form onSubmit={this.displayLogin}>
					<h2 class = "master-heading" id = "sign-up-heading"> sign in</h2>

					<div class = "signup-field">
						<input
							type="text"
							placeholder="email"
							name="email"
							value={this.state.email}
              onChange={this.update}
              class = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input
							type="password"
							placeholder="password"
							name="password"
							value={this.state.password}
              onChange={this.update}
              class = "signup-text"
						/>
					</div>

          <div class = "button-container" id = "first-page">
          <Link to="/fridge">
					<input type="submit" value = "next>" class = "next-button"/>
          </Link>
          </div>
				</form>
        </div>
        </div>
		);
	}
}

export default SignIn;