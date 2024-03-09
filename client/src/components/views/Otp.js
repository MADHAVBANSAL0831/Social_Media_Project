import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const genOtp = searchParams.get('otp');

    const [data, setData] = useState({
        otp: '',
    });

    const registerUser = async (e) => {
        const {otp} = data;
        if(otp === genOtp)
        {
            navigate('/');
            // sentMail()
        }
        else
        {
            
        }
    }

  return (
    <div>
        <form onSubmit={registerUser}>

            <label className='label'>OTP</label>
            <input className='input' type='otp' placeholder='enter OTP' value={data.otp} onChange={(e) => setData({...data, otp: e.target.value})}/>

            <button className='button' type='submit' >Send OTP</button>
        </form>
    </div>
  )
}

export default Register;