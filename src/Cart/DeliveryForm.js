import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./DeliveryForm.css"


function DeliveryForm() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address,setAddress] = useState(null);
    const [region,setRegion] = useState(null);
    const [city,setCity] = useState(null);

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
        if(id === "address"){
            setAddress(value);
        }
        if(id === "state"){
            setRegion(value);
        }
        if(id === "city"){
            setCity(value);
        }
    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,address,region,city);
    }

    return(
        <div className="deliform">
            <div className="deliform-body">
                <div>
                    <label  for="firstName">First Name </label>
                    <input  type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div>
                    <label className="deliform__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div>
                    <label for="phone">Phone Number </label>
                    <input  type="text" id="phone" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>

                <div>
                    <label for="address">Street Address</label>
                    <input  type="text" id="address"  value={address} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Address" />
                </div>
                <div>
                    <label className="sellform__label" for="region">State/Region </label>
                    <input  type="text" name="" id="region" value={region}  onChange = {(e) => handleInputChange(e)} placeholder="Select One"/>
                </div>
                <div>
                    <label className="sellform__label" for="city">City</label>
                    <input  type="text" name="" id="cityName" value={city}  onChange = {(e) => handleInputChange(e)} placeholder="Select One"/>
                </div>
                <Link to="/" onClick={()=>handleSubmit()} type="submit">Save & Continue</Link>
            </div>
            
        </div>
    )       
}


export default DeliveryForm;


