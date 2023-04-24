import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import '../customer_login/customer.css'
import { useState,useEffect } from 'react';
import Header from '../header/header';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomerSignup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [conPasswordShown, conSetPasswordShown] = useState(false);
  const [values,setValues]=useState([]) 

const { register, handleSubmit, formState: { errors } } = useForm();
   
const onSubmit = (data) => { 

  try {
    console.log(data);
    console.log("Email 16 line",data.Email);

    if(data.password === data.confirmPassword){
   let res = axios.post('http://13.235.13.82:8000/accounts/user/register',
      {      
        full_name:data.firstName,
        phone_no:data.mobileNumber,
        email:data.Email,
        business_need:data.businessNeeds,
        location:data.userLocations,
        password1:data.password,  
        password2: data.confirmPassword  
      }).then((response)=>{
        console.log("response28",res);
        console.log("respone status",res.status)
        toast("customer account created successfully")
      })      
    } 
    else {
      toast("password and confirm password not match.")
    }

 
  } catch (e) {
    console.log(e)
  }

}

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>data.json()).then((val)=>setValues(val))
},[])


const togglePassword = () => { 
  setPasswordShown(!passwordShown);
};

const conTogglePassword = () => { 
  conSetPasswordShown(!conPasswordShown);
};
  return (
    <div>
    <Header/>   
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <Form className="card-body cardbody-color p-lg-2" autoComplete="off"  onSubmit={handleSubmit(onSubmit)} >
          <h2 className="text-center mt-5 calogin" id="calogin">Customer Signup Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
            <Form.Field>
              <p className='inputtile'>Enter the Fullname.</p>
              <input
                className="form-control"
                type="text"
                placeholder='Fullname'              
                {...register("firstName", { required: true, maxLength: 60, minLength: 3, })}              
                />
              {errors.firstName && <p className='text-danger12'>* Please check the Fullname with a minimum of three  characters.</p>}             
              </Form.Field>   
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Mobile Number.</p>
              <input
                className="form-control"
                type="tel"                                        
                placeholder="Mobile Number"
                {...register("mobileNumber",
                {required: true, minLength: 10, maxLength: 10})}               
                /> 
              {errors.mobileNumber && <p className='text-danger12'>* Please check the ten-digit mobile number.</p>}  
             </Form.Field>                 
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Email id.</p>
              <input
             className="form-control"
             type="email"
             placeholder='email'
             {...register("Email", {required: false, pattern: /^\S+@\S+$/i})}                           
            />
             {errors.Email && <p className='text-danger12'>* Please check the email id.</p>}
          </Form.Field>              
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Business Needs.</p>
              <input
                className="form-control"
                type="text"
                placeholder='Business needs...'
                {...register("businessNeeds", {required: false,})}                                
                />             
            </Form.Field>                
            </div>           

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the CA Location Preference.</p>
            <select {...register("caLocations", {required: false,})}  className="form-control">
                {
                    values.map((opts,i)=><option key={i}>{opts.title}</option>)
                }
            </select>
             </Form.Field>                 
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Your Location.</p>
            <select {...register("useLocations", {required: false,})}  className="form-control">
                {
                    values.map((opts,i)=><option key={i}>{opts.title}</option>)
                }
            </select>
            </Form.Field>                
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Password</p>  
              <input
               type={passwordShown ? "text" : "password"}
               className="form-control"          
               placeholder="password"
               {...register("password",
              {required: true, max: 12,
              min: 4, maxLength: 12})}                                   
              />
              <Button onClick={togglePassword} type='button' className="btn btn-color px-5 mt-3 w-50"><i class="fa fa-eye" aria-hidden="true"></i>  Show Password</Button>
              {errors.password && <p className='text-danger12'>* minimum four characters and maximume twelve characters</p>}  
             </Form.Field>               
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the confirm Password</p>  
              <input
               type={conPasswordShown ? "text" : "password"}
               className="form-control"          
               placeholder="confirm password"
               {...register("confirmPassword",
              {required: true, max: 12,
              min: 4, maxLength: 12})}                                   
              />
              <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"              
              />
              <Button onClick={conTogglePassword} type='button' className="btn btn-color px-5 mt-3 w-50"><i class="fa fa-eye" aria-hidden="true"></i>  Show Password</Button>
              {errors.password && <p className='text-danger12'>* minimum four characters and maximume twelve characters</p>}  
             </Form.Field>               
            </div>
            <div className="text-center"><Button type="submit" className="btn btn-color px-5 mb-5 w-100"  >Submit</Button></div>            
          </Form>
        </div>

      </div>
    </div>
  </div>
    </div>

  )
}

export default CustomerSignup