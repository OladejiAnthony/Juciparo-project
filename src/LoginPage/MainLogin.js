import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./MainLogin.css"
import { Icon } from '@iconify/react';


function MainLogin() {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
       /* if(id === "phone"){
            setPhone(value);
        } */
        if(id === "password"){
            setPassword(value);
        }
     

    }

    const handleSubmit  = () => {
        console.log(email,password);
    }

    return(
        <div className="mainform">
            <div className="mainform-body">
                <div>
                    <label className="mainform__label" for="email">Email Address or Phone Number</label>
                    <input  type="email/phone" id="email" className="mainform__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email Address or Phone Number"/>
                </div>
                <div>
                    <label className="mainform__label" for="password">Password </label>
                    <input className="mainform__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Email Address or Phone Number"/>
                </div>
                <Link to="/AccountSeller">
                    <button onClick={()=>handleSubmit()} type="submit">
                        Sign In
                    </button>
                </Link>
            </div>
            <div className='social__login'>
                <div className='line'>
                    <div></div>
                    <h5>OR</h5>
                    <div></div>
                </div>
                <Link>
                    <Icon icon="akar-icons:facebook-fill" />
                    Continue with Facebook
                </Link>
                <Link>
                    <Icon icon="akar-icons:google-fill" />
                    Continue with Google
                </Link>
                <h5>Don't have an account ? <span>Sign Up</span></h5>
            </div>
        </div>
    )       
}

export default MainLogin
