import React, { Component } from 'react';
import './signup.css';
import { Route, Link, Redirect } from 'react-router-dom'; 
import Diet from '../Diet/diet.js';
import Container from 'react-bootstrap/Container';
import '../style.css';
import fire from '../config/fbConfig';

import {connect} from 'react-redux'
import  { signUp } from '../actions/authActions'

class SignUp extends Component {

/* 		this.state = {
			//username: '',
			email: '',
			password: '',
			confirmpass: ''
		}; */

		state = {
			//username: '',
			email: '',
			password: '',
			//confirmpass: ''
			//firstName: '',
			//lastName: ''
		}

		//this.signup = this.signup.bind(this);

		//this.update = this.update.bind(this);

		//this.displayLogin = this.displayLogin.bind(this);

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

/* 	signup = (e) =>  {
		e.preventDefault();

		const {username, password, confirmpass} = this.state;
		if(confirmpass !== password) {
			alert("Passwords Dont Match");
			return <Redirect to = "/signup"/>
		} else {
			fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
			}).then((u)=>{console.log(u)})
			.catch((error) => {
				console.log(error);
			})
		}
	} */

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state)
	 }

	render() {
		const {auth, authError} = this.props
		return (
      <div class = "form-container">
          <div class = "orange-form">
				<form onSubmit={this.handleSubmit}>
					<h2 className = "master-heading" id = "sign-up-heading"> sign up</h2>

					{/* <div class = "signup-field">
						<input
							type="text"
							placeholder="enter a username"
							name="username"
							id = "username"
							//value={this.state.email}
        					onChange={this.handleChange}
            				className = "signup-text"
						/>
					</div> */}

					<div class = "signup-field">
						<input
							type="text"
							placeholder="enter a email"
							name="email"
							id = "email"
							//value={this.state.email}
        					onChange={this.handleChange}
            				className = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input
							type="password"
							placeholder="choose a password"
							name="password"
							id = "password"
							//value={this.state.password}
  							onChange={this.handleChange}
            				className = "signup-text"
						/>
					</div>

					{/* <div class = "signup-field">
						<input type="password" 
						 	placeholder="confirm password"
						 	name="confirmpass" 
						 	className = "signup-text"
							value = {this.state.confirmpass}
							onChange = {this.update}
							/>
					</div> */}

          	<div class = "button-container" id = "first-page">
          		<button type="submit" 
						//onClick = {this.signup} 
						value = "next>" 
						class = "next-button">Sign Up
				</button>
          	</div>
			  <div className = 'yellow-text center'>
                            {authError ? <p> {authError} </p> : null}
            </div>
		</form>
        </div>
        </div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)