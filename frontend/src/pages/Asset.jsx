import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {search, reset} from '../features/assets/assetSlice'
import Spinner from '../components/Spinner';


function Asset({asset}) {


    return (

        <div className="hero min-h-screen bg-base-200">    
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register new account </h1>
            <p className="py-6">Provident cupiditate voluptatem et in ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>

            </div>
        </div>



  )
}

export default Asset
