// import React, { Component } from "react";
// import './signup.css';

// import { Route, Link } from 'react-router-dom'; 
// import Diet from '../Diet/diet.js'; 


// export class SignUp extends Component {

//     render() {
//       return (
//           <div className="SignUp">
//             <Route exact path="/diet" component={Diet} />

//               <div className="signup-content"> 
//                 <div className="signup-container">
//                     <h2>Sign Up</h2>
//                     <input type="text" placeholder="Email" className="input-email" />
//                     <p></p>
//                     <input type="text" placeholder="Username" className="input-username" />
//                     <p></p>
//                     <input type="text" placeholder="Password" className="input-password" />
//                     <p></p>
//                     <input type="text" placeholder="Confirm Password" className="input-confirmpassword" />
//                     <p></p>
//                     <div className="signup-button">
//                     <Link to="/diet">
//                         <button>Next</button>
//                     </Link> 
//                     </div>
//                 </div>   
              
//               </div>
//           </div>
//       );
//     }
//   }
   
//   export default SignUp;


import React, { Component } from 'react';
import './signup.css';
import { Route, Link, Redirect } from 'react-router-dom'; 
import Diet from '../Diet/diet.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';
import fire from '../config/fire';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			//username: '',
			email: '',
			password: '',
			confirmpass: ''
		};

		this.signup = this.signup.bind(this);

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

	signup(e){
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
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			//username: '',
			email: '',
			password: '',
			confirmpass: ''
		});
	}

	render() {
		return (
      <div class = "form-container">
          <div class = "orange-form">
				<form onSubmit={this.displayLogin}>
					<h2 className = "master-heading" id = "sign-up-heading"> sign up</h2>

					{/* <div class= "signup-field">
						<input
							type="text"
							placeholder="enter a username"
							name="username"
							value={this.state.username}
              onChange={this.update}
              className = "signup-text"
						/>
					</div> */}

					<div class = "signup-field">
						<input
							type="text"
							placeholder="enter a email"
							name="email"
							value={this.state.email}
        					onChange={this.update}
            				className = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input
							type="password"
							placeholder="choose a password"
							name="password"
							value={this.state.password}
  							onChange={this.update}
            				className = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input type="password" 
						 	placeholder="confirm password"
						 	name="confirmpass" 
						 	className = "signup-text"
							value = {this.state.confirmpass}
							onChange = {this.update}
							/>
					</div>

          			<div class = "button-container" id = "first-page">
          				<button type="submit" 
							onClick = {this.signup} 
							value = "next>" 
							class = "next-button">Sign Up
						</button>
          			</div>
				</form>
        </div>
        </div>
		);
		
	}
}

export default SignUp;