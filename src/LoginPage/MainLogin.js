import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./MainLogin.css"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../redux/auth";
import { clearMessage } from "../redux/message";

function MainLogin() {
    let navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    };


    const handleSubmit  = () => {
        console.log(email,password);
        
        dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
            navigate("/AccountSeller");
            window.location.reload();
        })
    }

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    if (isLoggedIn) {
        return <Navigate to="/AccountSeller" />;
    }

    return(
        <div className="mainform">
            <div className="mainform-body">
                <div>
                    <label className="mainform__label" for="email">Email Address or Phone Number</label>
                    <input className="mainform__input"  type="email/phone" id="email"  value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email Address or Phone Number"/>
                </div>
                <div>
                    <label className="mainform__label" for="password">Password </label>
                    <input className="mainform__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <Link>
                    <button onClick={()=>handleSubmit()} type="submit">
                        Sign In
                    </button>
                </Link>
            </div>

            {message && (
                <div className="orm-body">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                </div>
            )}
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
                <h5>Don't have an account ? 
                    <Link to="/CreateAccount">Sign Up</Link>
                </h5>
            </div>
        </div>
    )       
}

export default MainLogin
