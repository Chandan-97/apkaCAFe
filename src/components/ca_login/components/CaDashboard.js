import React from 'react'
import Header from '../../cadashboard/header/header'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



function CaDashboard() {
  return (
    <>   
 {/* <Header/> */}
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3 col-sm-3 col-lg-3 col-xl-3 mt-5'>
                <div className='bg-danger'>
                  <h1 className='text-light card-title'>< BusinessCenterIcon fontSize='large'/> CA DASH BOARD</h1>                  
                  <h2 className='text-light text-center'>CA NAME</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon fontSize='small'/> Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                  <h2 className='text-light text-center'><AccountBalanceIcon/>Service</h2>
                
                
                </div>
            </div>

            <div className='col-md-7 col-sm-7 col-lg-7 col-xl-7'>
                <div className='danger-bg'>
                  <p>lorem</p>
                </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default CaDashboard