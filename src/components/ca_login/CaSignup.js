import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import '../ca_login/login.css'

function CaSignup() {
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
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <Form className="card-body cardbody-color p-lg-2" onSubmit={handleSubmit(onSubmit)} >
          <h2 className="text-center mt-5 calogin" id="calogin">CA Signup Panel</h2>

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
            {...register("firstName", { required: true, maxLength: 10, minLength: 3, })}                                       
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

            <div className="mb-3">
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
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Location Preference.</p>
              <input
                className="form-control"
                type="type"                           
                placeholder="Enter location"
                {...register("locations", {required: true,})}              
                />
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
                {...register("yearOfExperience", {required: true, minLength: 6, maxLength: 6})}
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

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the business services</p> 
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Business Services"               
                />
              </Form.Field>                  
            </div>  

             <div className="mb-3">
             <Form.Field>
             <p className='inputtile'>Enter the CA passed Years</p> 
              <input  className="form-control" type="text"  id="Username" aria-describedby="emailHelp"
                placeholder="CA Passed Year"               
                />
              </Form.Field>                
            </div>     

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the Worked with company</p> 
              <input  className="form-control" type="text"  id="Username" aria-describedby="emailHelp"
                placeholder="Worked With companies"               
                />      
            </Form.Field>            
            </div>  

            <div className='mb-3'>
            <Form.Field>
            <p className='inputtile'>Enter the working year</p> 
            <input  className="form-control mb-3" type="number" min="1"  id="Username" aria-describedby="emailHelp"
                placeholder="Working Years"               
                />
            </Form.Field>                   
            </div>

            <div className='mb-3'>
            <Form.Field>
            <p className='inputtile'>upload Awards / Certifications</p>             
            <input  className="form-control mb-3" type="file" min="1"  id="Username" aria-describedby="emailHelp"
                placeholder="Awards / Certifications"               
                />
            </Form.Field>                   
            </div>           

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>upload passport size image.</p>          
              <input type="file" className="form-control" id="password" placeholder="password"           
              required/>
            </Form.Field>                
            </div>

            <div className="mb-3">
            <Form.Field>
            <p className='inputtile'>Enter the password</p>          
              <input type="password" className="form-control" id="password" placeholder="Confirm password"           
              required/>              
            </Form.Field>
            </div>
            <div className="text-center"><Button type="submit" className="btn btn-color px-5 mb-5 w-100">Submit</Button></div>
            
          </Form>
        </div>

      </div>
    </div>
  </div>
    </div>

  )
}

export default CaSignup