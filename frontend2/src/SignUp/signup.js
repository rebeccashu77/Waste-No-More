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
import { Route, Link } from 'react-router-dom'; 
import Diet from '../Diet/diet.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style.css';

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
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
			username: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
      <div class = "form-container">
          <div class = "orange-form">
				<form onSubmit={this.displayLogin}>
					<h2 class = "master-heading" id = "sign-up-heading"> sign up</h2>

					<div class= "signup-field">
						<input
							type="text"
							placeholder="enter a username"
							name="username"
							value={this.state.username}
              onChange={this.update}
              class = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input
							type="text"
							placeholder="enter a email"
							name="email"
							value={this.state.email}
              onChange={this.update}
              class = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input
							type="password"
							placeholder="choose a password"
							name="password"
							value={this.state.password}
              onChange={this.update}
              class = "signup-text"
						/>
					</div>

					<div class = "signup-field">
						<input type="password" placeholder="confirm password" name="password1" class = "signup-text"/>
					</div>

          <div class = "button-container" id = "first-page">
          <Link to="/diet">
					<input type="submit" value = "next>" class = "next-button"/>
          </Link>
          </div>
				</form>
        </div>
        </div>
		);
	}
}

export default SignUp;