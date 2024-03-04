import React from 'react'
import {Link} from "react-router-dom";
import image from '../components/layout/assets/IT-storage.jpg'


function Home() {


  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url(` + image + `)` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Asset Manager</h1>
          <p className="mb-5">Inventory management software (work in progress - not finished yet)</p>
          <div className="py-2">
          </div>
        </div>
      </div>
    </div>      
    </>
  )
}

export default Home
