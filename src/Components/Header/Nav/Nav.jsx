import React, { useState , useEffect} from 'react';

/** Header Style **/
import './Nav.scss';
/** Images **/
import User from '../../../Images/Nav/User.png';
export default function Nav(){
    const [navigation,setNavigation] = useState(
        ["HOME","DISCOVER","MARKETPLACE"]
    )
    const [nftsContainer,setNftsContainer] = useState(
        ["NFTs by Curios Music","Own a one-of-a-kind and limited digital collectible","Latest NFT drops"]
    )
    return(
        <nav className='container-fluid col-sm-12 col-md-12 col-lg-12 col-xs-12 text-center'>
          <div className='nav-child'>
            <div className='col-sm-11'>
                <ul>
                    {navigation.map((navItems)=>{
                        return <li>{navItems}</li>
                    })}
                </ul>
            </div>

            <div>
                <img src={User} alt='User Image' title='User' className='img-fluid'/>
            </div>
          </div>

            <div className='container nfts-container'>
                <span>
                    <h1>{nftsContainer[0]}</h1>
                    <br/>
                    <p>{nftsContainer[1]}</p>
                </span>
                <br/>
                <button className='btn'>{nftsContainer[2]}</button>
            </div>
        </nav>
    )
}