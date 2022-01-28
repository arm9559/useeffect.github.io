import React, { useState , useEffect} from 'react';

/** Images **/
import FirstSinger from '../../../Images/Main/FirstSinger.png';
import SecondSinger from '../../../Images/Main/SecondSinger.png';
import ThirdSinger from '../../../Images/Main/ThirdSinger.png';
import FourthSinger from '../../../Images/Main/FourthSinger.png';

import axios from 'axios';
export default function FeaturedNFTs(){
    const [NoneArray,setNoneArray] = useState([]);
    const [NoneArraySongs,setNoneArraySongs] = useState([]);
    const [NoneArraySongsTitle,setNoneArraySongsTitle] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cumque quisquam sed explicabo. Reiciendis harum cum eum cupiditate magni dicta libero modi veritatis ea, consectetur quas autem possimus dolor delectus.    ");
    const [category,setCategory] = useState("a");
    const [Images,setImages] = useState([
        FirstSinger,SecondSinger
    ])
        useEffect(()=>{
            axios.get('https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json').then((response)=>{
                setNoneArray(response.data)
                if(category === "ALL"){
                    setNoneArraySongsTitle("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero cumque quisquam sed explicabo. Reiciendis harum cum eum cupiditate magni dicta libero modi veritatis ea, consectetur quas autem possimus dolor delectus.")
                    setNoneArraySongs([])
                }
                if(category === "AUDIO"){
                    setNoneArraySongsTitle("")
                    setNoneArraySongs(response.data[0].albums[0].songs)
                }
                if(category === "ARTWORK"){
                    setNoneArraySongsTitle("")
                    setNoneArraySongs(response.data[0].albums)
                }
                console.log(response.data)
            })

        },[category])
    return(
        <>
            <div className='buttons-bar'>
                <button className='btn' onClick={()=>{setCategory("ALL")}}>ALL</button>
                <button className='btn' onClick={()=>{setCategory("AUDIO")}}>AUDIO</button>
                <button className='btn' onClick={()=>{setCategory("ARTWORK")}}>ARTWORK</button>
                <button className='btn' onClick={()=>{setCategory("VIDEO")}}>VIDEO</button>
            </div>
        <div className='container FeaturedNFTs'>
            {NoneArray.map((SingersItems)=>{
                return  <div className='container main-nfts'>
                        <img src={Images[0]} alt='Singer First' title='Singer'/>
                            <h4>{SingersItems.name}</h4>
                            <p>{NoneArraySongsTitle}</p>
                            <button className='btn'>View details</button>
                            {NoneArraySongs.map((SingersItems)=>{
                                return <span>{SingersItems.title}</span>
                            })}
                            {/* {NoneArraySongsTitle.map((SingersItems)=>{
                                return <span>{SingersItems.title}</span>
                            })} */}
                        </div>
            })}
        </div>
        </>
    )
}