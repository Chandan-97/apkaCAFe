import React from 'react'

function CaSignup() {
   
  return (
    <div>
<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
      
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-2" >
          <h2 className="text-center mt-5 calogin" id="calogin">CA Signup Panel</h2>

            <div className="text-center">
              <img src="https://www.w3schools.com/howto/img_avatar.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Enter Name" required              
                />              
            </div>

            <div className="mb-3">
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Mobile Number" required              
                />              
            </div>

            <div className="mb-3">
              <input  className="form-control" type="email" id="Username" aria-describedby="emailHelp"
                placeholder="Enter email"
                required               
                />              
            </div>

            <div className="mb-3">
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Six digit membership number"
                required               
                />              
            </div>

            <div className="mb-3">
              <input  className="form-control" type="type" id="Username" aria-describedby="emailHelp"
                placeholder="Enter location"
                required               
                />              
            </div>

            <div className="mb-3">
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Office Address"
                required               
                />              
            </div>

            <div className="mb-3">
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Years of Experience"
                required               
                />              
            </div>
         

            <div className="mb-3">
            <label  for="f02">Upload Degrees</label>
              <input  className="form-control" type="File" id="f02" aria-describedby="emailHelp"
                placeholder="Degrees uploads"
                required               
                />              
            </div>
            
            <div className="mb-3">               
                <textarea rows="4"  className="form-control" placeholder="Profile Summary" ols="50" maxlength="50">
               </textarea>           
            </div>

            <div className="mb-3">
              <input  className="form-control" type="text" id="Username" aria-describedby="emailHelp"
                placeholder="Business Services"               
                />              
            </div>  

             <div className="mb-3">
              <input  className="form-control" type="text"  id="Username" aria-describedby="emailHelp"
                placeholder="CA Passed Year"               
                />              
            </div>     

            <div className="mb-3">
              <input  className="form-control" type="text"  id="Username" aria-describedby="emailHelp"
                placeholder="Worked With companies"               
                />               
            </div>  

            <div className='mb-3'>
            <input  className="form-control mb-3" type="number" min="1"  id="Username" aria-describedby="emailHelp"
                placeholder="Working Years"               
                />                
            </div>

            <div className='mb-3'>
            <label  for="f02">Upload Awards / Certifications</label>
            <input  className="form-control mb-3" type="file" min="1"  id="Username" aria-describedby="emailHelp"
                placeholder="Awards / Certifications"               
                />                
            </div>

            <div className='mb-3'>
            <label  for="f02">Passport Photo</label>
            <input  className="form-control mb-3" type="file" min="1"  id="Username" aria-describedby="emailHelp"
                placeholder="Awards / Certifications"               
                />                
            </div>

            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password"           
              required/>              
            </div>

            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="Confirm password"           
              required/>              
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Submit</button></div>
            
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>

  )
}

export default CaSignup