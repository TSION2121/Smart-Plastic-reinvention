import { Button } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledLogin, StyledLoginButton, StyledLoginErrorMessge, StyledLoginForm, StyledLoginTitle, StyledNewUser } from '../../Styles/Login.styled'
import Register from '../Register/Register'
import {useRef,useState, useEffect} from  'react'

const Login = () => {
//purpose for setfocus on the 1st input while the component loads 
// and for screen reader read or assistive technologies if error occurs
  const userRef = useRef();
  const errRef = useRef();

//inputs
const [user,setUser] = useState('');
const [pwd, setPwd] = useState('');
//autheticate
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);


// //inputs
// useEffect(() => {

//   userRef.current.focus();
// },[]);

// //if the user  change the state of inputs for making adjustments
// useEffect(() => {

//   setErrMsg('')
// },[user, pwd]);


  return (
    <div>
      {/* <canvas></canvas> */}
      {/* graphics */}
    <StyledLogin>
    
        <StyledLoginTitle>
        Login
</StyledLoginTitle>
  <StyledLoginErrorMessge 
      ref={errRef}
      //errmsg
      aria-live="assertive"
      > 
        {errMsg}
        </StyledLoginErrorMessge>
   
 <StyledLoginForm>
 <label>Username: </label><br/>
<input  width="1000px" type="text"/>
<br/>
<br/>
    <label>Email: </label><br/>
<input  width="1000px" type="email"/>
<br/>
<br/>

<label>Password:</label><br/>
<input type="password"/>
<br/>
<br/>
<br/>

<StyledLoginButton
>
  <Button
  href="/home/*"
>Login</Button>
  </StyledLoginButton>
 </StyledLoginForm>
 <StyledNewUser> New User?
     <Button
     href="/register"
     > Create Account
</Button>
    
    <Routes>
        <Route path="/register/*" element={<Register />}>
    </Route>
    </Routes>    </StyledNewUser>

 </StyledLogin>

    </div>
  )
}

export default Login