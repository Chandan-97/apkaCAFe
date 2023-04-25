import React from 'react'
import "./service.css"
import { useState,useEffect } from 'react';
import Header from '../header/header';
import { serviceApi } from '../components/ApiRouter.js';

function ServiceCard() {
  const [values,setValues]=useState([]) 
  useEffect(()=>{
    fetch(serviceApi).then((data)=>data.json()).then((val)=>setValues(val))
  },[])
  return (
    <>
     <Header/>  
     <h1 className='text-center ourservice'>Our Services</h1>
    <div className='container mt-5 margin21'>
      <div className='row  d-flex justify-content-center'>
        {
            values.map((product,id) => {               
              return (                
                <div className="card col-md-3 avd" key={id}>                
                <div className="card-body my-2">
                  <h2 className="card-title stitle">{product.title}</h2>  
                  <ul>
                    <li>{product.features.list_show}</li>                    
                  </ul>              
                </div>               
              </div>
              )
            })
        }
      </div>
    </div>    

    </>         
  )
}

export default ServiceCard