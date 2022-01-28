import React, { useState , useEffect} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FirstSinger from '../../../Images/Main/FirstSinger.png';
import SecondSinger from '../../../Images/Main/SecondSinger.png';
import SixthSinger from '../../../Images/Main/SixthSinger.png';
import SeventhSinger from '../../../Images/Main/SeventhSinger.png';

export default function Slider(){
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
    return(
        <div>
            <Carousel responsive={responsive}>
                <div><img src={FirstSinger} title='Slider Image' alt='Slider Image'/></div>
                <div><img src={SecondSinger} title='Slider Image' alt='Slider Image'/></div>
                <div><img src={SixthSinger} title='Slider Image' alt='Slider Image'/></div>
                <div><img src={SeventhSinger} title='Slider Image' alt='Slider Image'/></div>
            </Carousel>;
        </div>
    )
}