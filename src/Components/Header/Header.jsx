import React, { useState , useEffect} from 'react';

/** Header Style **/
import './Header.scss';
/** Navbar **/
import Nav from "./Nav/Nav";
export default function Header(){
    return(
        <header className='container-fluid col-sm-12 col-md-12 col-lg-12 col-xs-12'>
            <Nav/>
        </header>
    )
}