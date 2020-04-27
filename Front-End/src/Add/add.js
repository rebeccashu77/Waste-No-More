import React, { Component } from "react";
import './add.css';
import '../style.css';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import  { add } from '../actions/fridgeAction'
import confirm from './confirm'

import { Route, Link } from 'react-router-dom'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from "moment";

export class Add extends Component {

    state = {
        //email: '',
        //password: '',
        food: '',
        //expiration_date: '',
        expiration_date: new Date(),
        entry: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleDateChange = (date) => {
        this.setState({
          expiration_date: date
        });
      };

    handleSubmit = (e) => {
       e.preventDefault();
       //console.log(this.state)
       //this.props.add(this.state) 

       if (!this.state.food || !this.state.expiration_date){
           alert("Please type an item to add and select a date")
           this.setState({
               entry: false
           })
       }else{
        this.props.add(this.state)
        this.setState({food: "", expiration_date: "", entry: true});
       }
    }

    render() {

      return (
          <div className="Add">
              <div className="add-content"> 
                <form onSubmit = {this.handleSubmit} >

                 <h>what do you want to add?</h>

                 <input type="text"
                 placeholder="item" 
                 className="input-item"
                 id = "food"
                 value = {this.state.food}
                 onChange={this.handleChange}
                 />

                {/* <input type="text"
                 placeholder="exp date" 
                 className="input-item"
                 id = "expiration_date"
                 value = {this.state.expiration_date}
                 onChange={this.handleChange}/> */}
                 <div > Expiration Date:
                 <DatePicker
                 className = "datePicker"
                 id = "expiration_date"
                 selected={this.state.expiration_date}
                 onChange={this.handleDateChange}
                 />
                 </div>


                <div>
                    <Link to="/fridge">
                        <button className = "next-button">Back</button>
                    </Link> 

                 <button className = "next-button"> Add
                 </button>
                 </div>

                
                 <div>
                    {this.state.entry ? 
                    (<p> item successfully added to fridge</p> ):
                    (null)
                    }
                 </div>
                
                
                 {/* <div className="add-buttons">
                     <Link to="/fridge">
                         <button class = "back-button next-button"> back</button>
                     </Link> 
                    <Link to="/confirm">
                         <button class = "next-button">next></button>
                     </Link> 
                  </div> */}
                </form>
              </div>
          </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (food) => dispatch(add(food))
    } // creates dispatch that takes project from this.state and sends it to the action dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)