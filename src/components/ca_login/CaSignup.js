import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useState,useEffect } from 'react';
import axios from 'axios'
import '../ca_login/login.css'
import Header from '../header/header';
import Banner from '../banner/banner';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";


function CaSignup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [conPasswordShown, conSetPasswordShown] = useState(false);
  const [values,setValues]=useState([]) 
  const history = useNavigate();
   
  const onSubmit = (data) => { 
    
  try {
    console.log(data);
    console.log("Email 16 line",data.Email);

    if(data.password === data.confirmPassword){
    axios.post('http://13.234.30.172:8000/accounts/ca/register',
      {      
        full_name: data.firstName,
        phone_no: data.mobileNumber,
        email: data.Email,
        location: data.locations,
        office_address: data.officeAddress,
        years_of_experience: data.yearOfExperience,
        degrees: data.degreeUpload,
        summary: data.profileSummary,
        passout_year:data.caPassedYears,
        password1:data.password,  
        password2: data.confirmPassword 
      }).then((response)=>{
        alert("customer account created successfully")
        console.log("response28",response);
        console.log("respone status",response.status)
        history("/calogin");
      })      
    } 
    else {
      toast("password and confirm password not match.")
    } 
  } catch (e) {
    console.log(e)
  }

    
  }
  
  const togglePassword = () => {   
    setPasswordShown(!passwordShown);
  };

  const conTogglePassword = () => { 
    conSetPasswordShown(!conPasswordShown);
  };

  useEffect(()=>{
    fetch("http://13.234.30.172:8000/location/list").then((data)=>data.json()).then((val)=>setValues(val))
  },[])
  return (
    <div>
       <Header/>
       <Banner/>
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <Form className="card-body cardbody-color p-lg-2" onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
          <h2 className="text-center mt-5 calogin" id="calogin">CA Signup Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>
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
              {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}                           
              />
              {errors.Email && <p className='text-danger12'>* Please check the email id.</p>}
            </Form.Field>                
            </div>

            {/* <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter The Six Digit Membership Number</p>
              <input
                className="form-control"
                type="tel"
                {...register("sixDigitMemebership",
                {required: true, minLength: 6, maxLength: 6})}                 
                placeholder="Six digit membership number"
                required               
                />
              {errors.sixDigitMemebership && <p className='text-danger12'>* Please check the six Digit membership number.</p>}  
              </Form.Field>                
            </div> */}

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Location Preference.</p>
            <select {...register("locations", {required: false,})}  className="form-control">
                {
                    values.map((opts,i)=><option key={i}>{opts[1]}</option>)
                }
            </select>
            {errors.locations && <p className='text-danger12'>* Enter the correct location.</p>}       
            </Form.Field>                
            </div>

            <div className="mb-3">
            <Form.Field>              
            <p className='inputtile'>Enter the office Address.</p>
              <input
                className="form-control"
                type="text"                
                placeholder="Office Address"
                {...register("officeAddress", {required: false,})}                                           
                />              
            </Form.Field>
            </div>

            <div className="mb-3">
            <Form.Field>  
            <p className='inputtile'>Enter the years of Experience</p> 
              <input
                className="form-control"
                type="tel"                 
                placeholder="Years of Experience"
                {...register("yearOfExperience", {required: true, minLength: 0})}
                />                
              {errors.yearOfExperience && <p className='text-danger12'>* Enter the correct number.</p>}       
            </Form.Field>                 
            </div>
         

            <div className="mb-3">
            <Form.Field> 
            <p className='inputtile'>upload degree</p> 
              <input
               className="form-control"
               type="File"  
               placeholder="Degrees uploads"
              {...register("degreeUpload", {required: true})}                            
                />
            {errors.degreeUpload && <p className='text-danger12'>* upload correct degree</p>}     
            </Form.Field>                  
            </div>
            
            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter profile Summary</p>                
                <textarea rows="4"
                  className="form-control"
                   placeholder="Profile Summary"
                  ols="50"
                  {...register("profileSummary", {required: true})}                            
                  maxlength="50">
               </textarea>
               {errors.profileSummary && <p className='text-danger12'>* Enter the profile Summary</p>}        
            </Form.Field>              
            </div>

            {/* <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the business services</p> 
              <input
                className="form-control"
                type="text"              
                placeholder="Business Services"
                {...register("businessServices", {required: true})}                 
                />
                {errors.businessServices && <p className='text-danger12'>* Please fill the correct business services.</p>}        
              </Form.Field>                  
            </div>   */}

             <div className="mb-3">
             <Form.Field>
             <p className='inputtile'>Enter the CA passed Years</p> 
              <input
                className="form-control"
                type="tel"
                {...register("caPassedYears", {required: true, minLength: 0 })}                   
                placeholder="CA Passed Year"               
                />
                {errors.caPassedYears && <p className='text-danger12'>* Please fill the correct CA passed years.</p>}        
              </Form.Field>                
            </div>     

            {/* <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Worked with company</p> 
              <input
               className="form-control"
               type="text"             
               placeholder="Worked With companies"
               {...register("caPassedYears", {required: false})}       
                />      
            </Form.Field>            
            </div>   */}

            <div className='mb-3'>
            <Form.Field>
            <p className='inputtile'>Enter the working year</p> 
            <input
            className="form-control mb-3"
            type="tel"          
            placeholder="Working Years"       
            {...register("workingYears", {required: false})}          
                />
            </Form.Field>                   
            </div>

            {/* <div className='mb-3'>
            <Form.Field>
            <p className='inputtile'>upload Awards / Certifications</p>             
            <input
            className="form-control mb-3"
            type="file"              
            placeholder="Awards / Certifications"
            {...register("uploadAwards", {required: false})}                  
                />
            </Form.Field>                   
            </div>            */}

            {/* <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>upload passport size image.</p>          
              <input type="file"
              className="form-control"
            {...register("uploadPhoto", {required: true})}  
              placeholder="upload passport size image."           
              required/>
            {errors.uploadPhoto && <p className='text-danger12'>* Please upload the passport size photo.</p>}        
            </Form.Field>                
            </div> */}

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

export default CaSignup