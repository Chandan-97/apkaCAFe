import React, { useState } from 'react'
import {Link } from "react-router-dom";
import '../customer_login/customer.css'
import Header from '../header/header';

export default function Customerlogin() {
  const [email,setEmail]= useState();
  const [password,setPassword] = useState();

  const submitForm = (e)=>{
   console.log(email)
   console.log(password);
  } 
  return (
    <div>
          <Header/>
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-2" onSubmit={submitForm()}>
          <h2 className="text-center mt-5 calogin" id="calogin">Customer Login Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input  className="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="email/mobile" required
                onChange={e=>setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password"
               onChange={e=>setPassword(e.target.value)}
              required/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div  className="form-text text-center mb-5 emailHelp">Not
              Registered? <Link to="/customersignup" className="fw-bold "> Create an
                Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}
