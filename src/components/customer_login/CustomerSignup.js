import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import '../customer_login/customer.css'
import { useState } from 'react';
import Header from '../header/header';

function CustomerSignup() {
  const [passwordShown, setPasswordShown] = useState(false);
const { register, handleSubmit, formState: { errors } } = useForm();
   
const onSubmit = (data) => { 
  console.log(data);
}

const togglePassword = () => {
  // When the handler is invoked
  // inverse the boolean state of passwordShown
  setPasswordShown(!passwordShown);
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
              <input
                className="form-control"
                type="text"                          
                placeholder="CA Location Preference"
                {...register("caLocations", {required: false,})}                           
                /> 
             </Form.Field>                 
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Your Location.</p>
              <input
                className="form-control"
                type="text"                            
                placeholder="Your Location"
                {...register("userLocations", {required: false,})}        
                />
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