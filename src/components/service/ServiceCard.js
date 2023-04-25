import React from 'react'
import "./service.css"
import { useState,useEffect } from 'react';
import Header from '../header/header';

function ServiceCard() {
  const [values,setValues]=useState([]) 
  useEffect(()=>{
    fetch("http://43.204.96.169:8000/caservice/all").then((data)=>data.json()).then((val)=>setValues(val))
  },[])
  return (
    <>
     <Header/>  
     <h1 className='text-center'>Our Services</h1>
    <div className='container mt-5 margin21'>
      <div className='row  d-flex justify-content-center'>
        {
            values.map((product,id) => {               
              return (                
                <div className="card col-md-3 avd" key={id}>                
                <div className="card-body my-2">
                  <h2 className="card-title">{product.title}</h2>  
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