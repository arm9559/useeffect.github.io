import React, { useState} from 'react';
import "./Footer.scss";
/** Images **/
import Envelope from '../../Images/Footer/envelope.png';
import Ios from '../../Images/Footer/Ios.png';
import GooglePlay from '../../Images/Footer/GooglePlay.png';
import Send from '../../Images/Footer/send.png';
import Visa from '../../Images/Footer/visa.png';
export default function Footer(){
    const heading = "Enter your email to subscribe to our newsletter";
    return(
        <footer className='container-fluid text-center'>
            <div className='container form-container'>
                <h6>{heading}</h6>
                <form>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Your Email'/>
                    </div>
                    <button type="button" className='btn form-button'>
                        <img src={Send} alt='Send' title='Send'/>
                    </button>
                </form>
            </div>

    <div className='container footer-child'>
        <div className='container footer-navigation'>
        <h3>Connect</h3>
            <div className='ul-ul'>
                <ul className='ul-social-bar'>
                    <li>support@curios.com</li>
                </ul>
                <ul className='ul-social-bar-icons'>
                    <li>instagram</li>
                    <li>instagram</li>
                    <li>instagram</li>
                </ul>
            </div>
        </div>

        <div className='container footer-navigation'>
        <h3>MOBILE APP</h3>
            <div className='ul-ul'>
                <ul className='ul-social-bar'>
                    <li><img src={Ios} alt='Ios' title='Ios'/></li>
                    <li><img src={GooglePlay} alt='Ios' title='Ios'/></li>
                </ul>
            </div>
        </div>

        <div className='container footer-navigation'>
        <h3>ABOUT</h3>
            <div className='ul-ul'>
                <ul className='ul-social-bar'>
                    <li>About this marketplace</li>
                    <li>Frequently asked questions</li>
                </ul>
            </div>
        </div>

        <div className='container footer-navigation'>
        <h3>LEGALESE</h3>
            <div className='ul-ul'>
                <ul className='ul-social-bar'>
                    <li>support@curios.com</li>
                </ul>
                <ul type='none'>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Returns & Refunds</li>
                    <li>Taxes & Fees</li>
                </ul>
            </div>
        </div>
    </div>

    <div className='container footer-child-down'>
        <p>©2021 Curios Music. All rights reserved</p>
        <img src={Visa}/>
    </div>
        </footer>
    )
}
