import React from 'react'
import {Link } from "react-router-dom";
import '../ca_login/login.css'
import Header from '../header/header';



export default function calogin() {
  return (
    <div> 
      <Header/>
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-2">
          <h2 className="text-center mt-5 calogin" id="calogin">CA Login Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
               placeholder="email/mobile"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password"/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div  className="form-text text-center mb-5 emailHelp">Not
              Registered? <Link to="/casignup" className="fw-bold "> Create an
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
