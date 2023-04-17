import React, { useEffect, useState } from 'react'

function CustomerSignup() {
    const [formData, setFormData] = useState({
        username: "",
        moblie:"",
        email: "",
        businessNeeds:"",
        caLocation:"",
        userLocation:"",
        password: "",
        confirm_password: "",
      });

      console.log(formData)

      const handleInput = (event) => {
        const name = event.target.name;    
        const value = event.target.value;
    
        setFormData((prev) => {
          return { ...prev, [name]: value };
        });
      };
      
   

  return (
    <div>
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-2">
          <h2 className="text-center mt-5 calogin" id="calogin">Customer Signup Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="Username" 
                placeholder="Enter Name"
                value={formData.username}                
                name="username"            
                required  
                onChange={handleInput}
                />              
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="moblie"                           
                placeholder="Mobile Number"
                value={formData.moblie}                
                name="moblie"  
                required
                onChange={handleInput}              
                />              
            </div>

            <div className="mb-3">
              <input
             className="form-control"
             type="email"
             id="email"           
             placeholder="Enter email"
             value={formData.email}                
             name="email"  
             required   
             onChange={handleInput}               
                />              
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="businessNeeds"                 
                placeholder="Business Needs"
                value={formData.businessNeeds}                
                name="businessNeeds"
                onChange={handleInput}   
                />              
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                id="Username"             
                placeholder="CA Location Preference"
                value={formData.caLocation}                
                name="caLocation"  
                onChange={handleInput}               
                />              
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text" id="userLocation"                
                placeholder="Your Location" 
                value={formData.userLocation}                
                name="userLocation"   
                onChange={handleInput}            
                />              
            </div>
            
            <div className="mb-3">
              <input
               type="password"
               className="form-control"
               id="password"
               placeholder="password"
               value={formData.password}                
               name="password" 
               onChange={handleInput}
              required/>              
            </div>

            <div className="mb-3">
              <input type="password"
               className="form-control"
              id="confirm_password"
               placeholder="Confirm password"
               value={formData.confirm_password}                
               name="confirm_password" 
               onChange={handleInput}
                         
              required/>              
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100"  onChange={handleInput}>Submit</button></div>
            
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>

  )
}

export default CustomerSignup