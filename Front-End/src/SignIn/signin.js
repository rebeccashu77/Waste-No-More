import React, { Component } from 'react';
import './signin.css';
import { Route, Link } from 'react-router-dom'; 
import '../style.css';
//import fire from '../config/fbConfig';
import { connect } from 'react-redux'
import { signIn } from '../actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
	constructor(props) {
		super(props);




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

/* 	login =(e) => {
		e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
		}).catch((error) => {
			console.log(error);
		});
	} */

/* 	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	} */

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state)
	 }

	render() {
		return (
      		<div class = "form-container">
          		<div class = "orange-form">
					<form onSubmit = {this.handleSubmit}> 
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
						//onClick = {this.login} 
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

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)