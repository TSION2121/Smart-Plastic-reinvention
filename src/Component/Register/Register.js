import { Button } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StyledNewUser } from '../../Styles/Login.styled'
import { StyledRegister, StyledRegisterErrorMessge, StyledRegisterForm, StyledRegisterTitle, StyledRegisterLabelInvalid, StyledRegisterLabelValid, StyledRegisterUsernameTxt, StyledRegisterPasswordSymbols, StyledRegisterPasswordTxt, StyledRegisterLabelPasswordValid } from '../../Styles/Register.styled'
import {useRef,useState, useEffect} from  'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  '../../Register.css'
import Login from '../Login/Login'



const Register = () => {

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Email_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i;

// and for screen reader read or assistive technologies if error occurs
const userRef = useRef();
const emailRef = useRef();
const errRef = useRef();

//inputs
const [user,setUser] = useState('');
const [validName, setValidName] = useState(false);
const[userFocus, setUserFocus] = useState(false);

const [email,setEmail] = useState('');
const [validEmail, setValidEmail] = useState(false);
const[emailFocus, setEmailFocus] = useState(false);
//autheticate

const [pwd, setPwd] = useState('');
const [validPwd, setValidPwd] = useState(false);
const[pwdFocus, setPwdFocus] = useState(false);

const [matchPwd, setMatchPwd] = useState('');
const [validMatch, setValidMatch] = useState(false);
const[matchFocus, setMatchFocus] = useState(false);

//autheticate
const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);


// //inputs
useEffect(() => {

  userRef.current.focus();
  emailRef.current.focus();

},[]);

//if the user  change the state of inputs for making adjustments
useEffect(() => {
 const result =  USER_REGEX.test(user) ;
 console.log(result);
 console.log(user);
 setValidName(result);
 
},[user]);

useEffect(() => {
  const result =  Email_REGEX.test(email) ;
  console.log(result);
  console.log(email);
  setValidEmail(result);
  
 },[email]);

useEffect(() => {
  const result =  PWD_REGEX.test(pwd) ;
  console.log(result);
  console.log(pwd);
  setValidPwd(result);
  const match = pwd === matchPwd;
  setValidMatch(match);
  
 },[pwd, matchPwd]);

// //if the user  change the state of inputs for making adjustments
useEffect(() => {

  setErrMsg('')
},[user,email, pwd, matchPwd]);

const handleSubmit  = async(e) => {
  e.preventDefault();

   // if button enabled with JS hack
   const v1 = USER_REGEX.test(user);
   const v3 = Email_REGEX.test(email);

   const v2 = PWD_REGEX.test(pwd);
   if (!v1 || !v2 || !v3) {
       setErrMsg("Invalid Entry");
       return;
}
console.log(user,email, pwd);
setSuccess(true);
}

  return (
    <>
    {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/*">Sign In</a>
                    </p>
                </section>
            ) : (
    <StyledRegister>

        <StyledRegisterTitle> Register</StyledRegisterTitle>
 <StyledRegisterErrorMessge
      ref={errRef}
      //errmsg
      className={errMsg ? "errmsg" : "offscreen"} 
      aria-live="assertive"
      > 
        {errMsg}
        </StyledRegisterErrorMessge>
        <StyledRegisterForm 
        onSubmit={handleSubmit}
        >
        <label>First Name:</label>
        <input type="text"/>

        <br/>
        <label>Last Name:</label>
        <input type="text"/>

        <br/>
        
        <label>Age: </label>
        <input type="number"/>
        <br/>
        <label>Username:
         <StyledRegisterLabelValid 
         className={validName ? "valid" : "hide"}

         >         
          <FontAwesomeIcon icon={faCheck}/>
          </StyledRegisterLabelValid> 
          
          <StyledRegisterLabelInvalid
          className={validName ||  !user ?  "hide": "invalid"}
          >

          <FontAwesomeIcon icon={faTimes}/>

          </StyledRegisterLabelInvalid>
          
           </label>
        <input type="text"
        id='username'
        ref={userRef}
        autoComplete="off"
        onChange={(e) => {setUser(e.target.value);}}
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=> {setUserFocus(true)}}
        onBlur={()=> {setUserFocus(false)}}
        
        />
        <StyledRegisterUsernameTxt
        id='uidnote'
        className={userFocus && user && !validName ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon 
          icon={faInfoCircle} 
          />
     4 to 24characters.<br/>
     Must begin with a letter. <br/>
     Letters, numbers, underscores,hyphens allowed.
       
        </StyledRegisterUsernameTxt>
        <br/>
        

        <label>Email:
           <StyledRegisterLabelValid 
         className={validEmail ? "valid" : "hide"}

         >         
          <FontAwesomeIcon icon={faCheck}/>
          </StyledRegisterLabelValid> 
          
          <StyledRegisterLabelInvalid
          className={validEmail ||  !user ?  "hide": "invalid"}
          >

          <FontAwesomeIcon icon={faTimes}/>

          </StyledRegisterLabelInvalid>
           </label>
        <input
         type="email"
          id='email'
        ref={emailRef}
        autoComplete="off"
        onChange={(e) => {setEmail(e.target.value);}}
        required
        aria-invalid={validEmail ? "false" : "true"}
        aria-describedby="emailnote"
        onFocus={()=> {setEmailFocus(true)}}
        onBlur={()=> {setEmailFocus(false)}}
        
         />
            <StyledRegisterUsernameTxt
        id='emailnote'
        className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon 
          icon={faInfoCircle} 
          />
     Must contain@ symbol <br/>
     Letters, numbers, underscores,  and @ symbols are allowed.
       
        </StyledRegisterUsernameTxt>
        <br/>
        
        <label 
        htmlFor='password'
        >Password:
        <StyledRegisterLabelPasswordValid 
         className={validPwd ? "valid" : "hide"}

         >         
          <FontAwesomeIcon icon={faCheck}/>
          </StyledRegisterLabelPasswordValid> 
          
          <StyledRegisterLabelInvalid
          className={validPwd ||  !pwd ?  "hide": "invalid"}
          >

          <FontAwesomeIcon icon={faTimes}/>

          </StyledRegisterLabelInvalid>


        </label>
        <input 
        type="password"
        id='password'
        onChange={(e) => setPwd(e.target.value)}
        required
        aria-invalid={validPwd ? "false" : "true"}
        aria-describedby="pwdnote"
        onFocus={()=> {setPwdFocus(true)}}
        onBlur={()=> {setPwdFocus(false)}}

        />
            <StyledRegisterPasswordTxt
        id='pwdnote'
        className={pwdFocus  && !validPwd ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon 
          icon={faInfoCircle} 
          />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters:
              <StyledRegisterPasswordSymbols
              aria-label="exclamation mark"
              >
                !
              </StyledRegisterPasswordSymbols>
              
              <StyledRegisterPasswordSymbols
              aria-label="at symbol"
              >
                @
              </StyledRegisterPasswordSymbols>
              <StyledRegisterPasswordSymbols
              aria-label="hashtag"
              >
                #
              </StyledRegisterPasswordSymbols>
              <StyledRegisterPasswordSymbols
              aria-label="dollar sign"
              >
                $
              </StyledRegisterPasswordSymbols>
              <StyledRegisterPasswordSymbols
              aria-label="percent"
              >
                %
              </StyledRegisterPasswordSymbols>
        </StyledRegisterPasswordTxt>
        <br/>
       
 
        <label 
        htmlFor='confirmpassword'
        >Confirm Password:
        <StyledRegisterLabelPasswordValid 
         className={validMatch && matchPwd ? "valid" : "hide"}

         >         
          <FontAwesomeIcon icon={faCheck}/>
          </StyledRegisterLabelPasswordValid> 
          
          <StyledRegisterLabelInvalid
          className={validMatch || !matchPwd ||  !pwd ?  "hide": "invalid"}
          >

          <FontAwesomeIcon icon={faTimes}/>

          </StyledRegisterLabelInvalid>


        </label>
        <input 
        type="password"
        id='confirmpassword'
        onChange={(e) => setMatchPwd(e.target.value)}
        required
        aria-invalid={validMatch ? "false" : "true"}
        aria-describedby="cpwdnote"
        onFocus={()=> {setMatchFocus(true)}}
        onBlur={()=> {setMatchFocus(false)}}

        />
            <StyledRegisterPasswordTxt
        id='cpwdnote'
        className={matchFocus  && !validMatch ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon 
          icon={faInfoCircle} 
          />
              Must match with the First password

             </StyledRegisterPasswordTxt>
        <br/>
        <br/>

        <Button
        href ="/"
        disabled={!validName || !validPwd || !validMatch ? true : false}
        > 
        Register
        </Button>
        </StyledRegisterForm>
        <StyledNewUser> Already have an account? 
<span
     className='line'
>
     <Button
     href="/"
     > Login instead
</Button>
    </span>
    {/* <Routes>
        <Route path="/login" element={<Login />}>
    </Route>
    </Routes>   */}
      </StyledNewUser>

    </StyledRegister>
    
    )}
    </>
  )
}

export default Register