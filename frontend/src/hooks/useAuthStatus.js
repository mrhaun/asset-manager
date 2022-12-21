import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector} from 'react-redux'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setloading] = useState(true)

    const {user} = useSelector((state) => state.auth)

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        } else {    
            setLoggedIn(false)
        }
        setloading(false)

    }, [user])
    return {loggedIn, loading}
}

