import React, { Component } from 'react';
import './signin.css';
import { Route, Link } from 'react-router-dom'; 
import '../style.css';
import fire from '../config/fire';

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.login = this.login.bind(this);
		this.handleChange = this.handleChange.bind(this);


		this.state = {
			email: '',
			password: ''
		}

		//this.update = this.update.bind(this);

		//this.displayLogin = this.displayLogin.bind(this);
	}
	

	/* update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	} */

	login(e) {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
		}).catch((error) => {
			console.log(error);
		});
	}

/* 	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	} */

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	render() {
		return (
      		<div class = "form-container">
          		<div class = "orange-form">
					<form>
					<h2 className = "master-heading" id = "sign-up-heading"> sign in</h2>

					<div class = "signup-field">
						<input
							type="text"
							placeholder="email"
							name="email"
							value={this.state.email}
              				onChange={this.handleChange}
             				className = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input
							type="password"
							placeholder="password"
							name="password"
							value={this.state.password}
             				onChange={this.handleChange}
              				className = "signup-text"
						/>
					</div>

		  			<div class = "-container" id = "first-page">	
						<button type="submit" 
						onClick = {this.login} 
						value = "next>" 
						class = "next-button">Next
						</button>
        			</div>
					</form>
      	 		</div>
       	 	</div>
		);
	}
}

export default SignIn;