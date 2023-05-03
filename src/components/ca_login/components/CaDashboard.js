import React from 'react'
import Header from '../../cadashboard/header/header'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SendIcon from '@mui/icons-material/Send';
import '../components/dashboard.css';
import ChatIcon from '@mui/icons-material/Chat';



function CaDashboard() {
  return (
    <>   
 {/* <Header/> */}
    <div className='container-fluid bgchat'>
        <div className='row'>
            <div className='col-md-3 col-sm-3 col-lg-3 col-xl-3 mt-5 my-5 scroll'>
                <div className='bg-dark'>
                  <h1 className='text-light card-title text-center'>< BusinessCenterIcon fontSize='large'/> CA DASH BOARD</h1>                  
                  <h2 className='text-light text-center'>CA NAME</h2>                  
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>
                  <h2 className='text-light ml-2 text-left'><AccountBalanceIcon fontSize='small'/>  Service Name</h2>                               
                </div>
            </div>

            <div className='col-md-7 col-sm-7 col-lg-7 col-xl-7 mt-5 my-5 bgchat'>
                <div className='mt-4'>
                  <h1 className='text-center text-danger'><ChatIcon sx={{ fontSize: 20 }}/> Live Chat</h1>

                  <div className='bg-light leftside'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. Ut enim ad minim ve
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                          niam, quis nostrud exercitation ullamco laboris nisi ut aliqui</p>

                  </div>

                  <div className='bg-light leftside2'>
                    <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui
                          niam, quis nostrud exercitation ullamco laboris nisi ut aliqui</p>
                  </div>

                </div>

<div className='formstyle'>
<form>
                            <div className="form-group">    
                                <input type="email" className="form-control mt-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your message.."/>   
                            <div className='rightside'>

                            <button type="submit" className="btn btn-primary mt-3"><SendIcon/></button>
                            </div>
                            </div>
                        </form>

</div>
                     
            </div>

        </div>

    </div>
    </>
  )
}

export default CaDashboard