import {Link } from "react-router-dom";
import '../customer_login/customer.css'
import Header from '../header/header';
import axios from 'axios';
import { useForm } from "react-hook-form";
// import AuthUser from '../authUser/AuthUser';
import { useNavigate } from "react-router";

export default function Calogin() { 
  // const {http,setToken} = AuthUser();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useNavigate();

  const onSubmit = (data)=>{
    try { 
     
      axios.post('http://13.234.30.172:8000/accounts/ca/login',
        {      
          email:data.Email,
          password:data.password
        }).then((status)=>{       
          alert("login successfully")     
          console.log(status.status)
          history("/");
        })      
      } 
      
   
     catch (e) {
      console.log(e)
      alert("Your account not created.")
    }
  } 
  return (
    <div>
          <Header/>           
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-2" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mt-5 calogin" id="calogin">CA Login Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input  className="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="email/mobile" 
                {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
                />
                  {errors.Email && <p className='text-danger12'>* Please check the email id.</p>}

            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password"
             {...register("password",
             {required: true})}  
              />
               {errors.password && <p className='text-danger12'>* password required</p>}               
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
