import React, { useState , useEffect} from 'react';

/** Main Style **/
import '../Main/Main.scss';

/** Components **/
import FeaturedNFTs from './FeaturedNFTs/FeaturedNFTs';
import LatestNFTs from './LatestNFTs/LatestNFTs';
export default function Main(){
    const [NFTsText,setNFTsText] = useState(
        ['Featured NFTs']
    )
    return(
        <main className='container-fluid col-sm-12 col-md-12 col-lg-12 col-xs-12'>
            <h1>{NFTsText}</h1>
            <FeaturedNFTs/>
            <LatestNFTs/>
        </main>
    )
}