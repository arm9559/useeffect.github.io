import React, { useState , useEffect} from 'react';
/** Components **/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
/** Images **/
import FirstSinger from '../../../Images/Main/FirstSinger.png';
import SecondSinger from '../../../Images/Main/SecondSinger.png';
import SixthSinger from '../../../Images/Main/SixthSinger.png';
import SeventhSinger from '../../../Images/Main/SeventhSinger.png';
export default function LatestNFTs(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    }
    const [FirstSingerInformation,setFirstSingerInformation] = useState(
        [{
            name:"Run the Jewels 2",
            price:"BUY NOW $9.00",
            defaultButtonName:"View details",
            image:SixthSinger
        }]
    );
    const [SecondSingerInformation,setSecondSingerInformation] = useState(
        [{
            name:"Come Down Official Music Video",
            priceFirst:"MIN BID $1,000.00",
            priceSecond:"BUY NOW $25,000.00",
            defaultButtonName:"View details",
            image:SeventhSinger
        }]
    )
    const [ThirdSingerInformation,setThirdSingerInformation] = useState(
        [{
            name:"Smiley",
            price:"BUY NOW $5.00",
            defaultButtonName:"View details",
            image:FirstSinger
        }]
    )
    const [FourthSingerInformation,setFourthSingerInformation] = useState(
        [{
            name:"Pressa",
            price:"BUY NOW $2.00",
            defaultButtonName:"View details",
            image:SecondSinger
        }]
    )
    return(
        <div className='container LatestNFTs'>
            <h1>Latest NFTs</h1>
            <Carousel responsive={responsive}>
                <div>
                 {FirstSingerInformation.map((SingersItems)=>{
                return  <div className='contianer main-nfts'>
                            <img src={SingersItems.image} alt='Singer First' title='Singer'/>
                            <h4>{SingersItems.name}</h4>
                                <br/>
                            <p>{SingersItems.price}</p>
                            <button className='btn'>{SingersItems.defaultButtonName}</button>
                        </div>
                    })}
                </div>

                <div>
                {SecondSingerInformation.map((SingersItems)=>{
                return  <div className='contianer main-nfts'>
                            <img src={SingersItems.image} alt='Singer First' title='Singer'/>
                            <h4>{SingersItems.name}</h4>
                                <br/>
                            <p>{SingersItems.price}</p>
                            <button className='btn'>{SingersItems.defaultButtonName}</button>
                        </div>
                    })}
                </div>
                <div>
                {ThirdSingerInformation.map((SingersItems)=>{
                return  <div className='contianer main-nfts'>
                            <img src={SingersItems.image} alt='Singer First' title='Singer'/>
                            <h4>{SingersItems.name}</h4>
                                <br/>
                            <p>{SingersItems.price}</p>
                            <button className='btn'>{SingersItems.defaultButtonName}</button>
                        </div>
                    })}
                </div>
                <div>
                {FourthSingerInformation.map((SingersItems)=>{
                return  <div className='contianer main-nfts'>
                            <img src={SingersItems.image} alt='Singer First' title='Singer'/>
                            <h4>{SingersItems.name}</h4>
                                <br/>
                            <p>{SingersItems.price}</p>
                            <button className='btn'>{SingersItems.defaultButtonName}</button>
                        </div>
                    })}
                </div>
            </Carousel>
        </div>
    )
}