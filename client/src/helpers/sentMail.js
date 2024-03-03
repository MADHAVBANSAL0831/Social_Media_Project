import React from 'react'
import axios from 'axios';

const sentMail = async (email, username) => {
    // const {email, password} = formData;
    console.log(email);
    try { 
        const { data } = await axios.post('http://localhost:4000/api/users/Sent', { email, username });
      
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Email Sent Successfully");
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
}

export default sentMail;