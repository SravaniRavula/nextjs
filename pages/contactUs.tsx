import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import {useState} from 'react'
import Captcha from './captcha'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';


const contactUs = () => {
    const initialState = { firstName: '', lastName: '', email: '', address: '', city: '', state: '', zip: '', captcha:'' }
    const [userData, setUserData] = useState(initialState)
    const { firstName, lastName, email, address, city, state, zip,captcha } = userData

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    }
    return (
        <>
         <div>
             <Head>
                 <title>
                     Contact Us Form
                 </title>
             </Head>

         </div>
           <Header />
                <section className="container">
                    <h1 className="d-flex justify-content-center my-4 py-4">
                        Contact US
                    </h1>
                <form>
                <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="firstName" className="form-control" id="inputFirstName" 
                        name="firstName" value={firstName} onChange={handleChangeInput} />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input type="lastName" className="form-control" id="inputLastName" 
                         name="lastName" value={lastName} onChange={handleChangeInput} />
                        </div>
                    </div>
                <div className="form-row">
                        <div className="form-group col-md-12">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" 
                         name="email" value={email} onChange={handleChangeInput} />
                        </div>
                       
                   </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" 
                         name="address" value={address} onChange={handleChangeInput} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" 
                         name="city" value={city} onChange={handleChangeInput} />
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <input type="text" className="form-control" id="inputState" 
                          name="state" value={state} onChange={handleChangeInput} />
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" 
                         name="zip" value={zip} onChange={handleChangeInput} />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="text">
                            Add You Message Here:
                            <br />
                            <textarea type="text" id="text" name="text" rows="6" cols="120" >
                            </textarea>
                        </label>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="inputZip" placeholder="Captcha"
                         name="captcha" value={captcha} onChange={handleChangeInput} />
                        </div>
                       
                    </div>  
                    <div className="form-group col-md-4">< Captcha/></div>
                    <div className="form-group">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>       
                    <p>
                    <button type="submit" className="btn btn-primary my-4">Send</button>
                        </p>

                    </form>
                </section>
            <Footer />
        </>
    )
}

export default contactUs;