import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./RegistrationForm.css"


function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "password"){
            setPassword(value);
        }
     

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div>
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div>
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div>
                    <label className="form__label" for="email">Email Address</label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div>
                    <label className="form__label" for="phone">Phone Number </label>
                    <input  type="text" id="phone" className="form__input" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>
                <div>
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit">Create An Account</button>
            </div>
            <div className='terms'>
                <h5>By signing Up you accept our <span>terms and conditions & privacy policy</span></h5>
                <div>
                    <p>ALready have an Account ?</p>
                    <Link to="/AccountLogin" >Sign In</Link>
                </div>
            </div>
        </div>
    )       
}

export default RegistrationForm
