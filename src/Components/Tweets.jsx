import { useState } from 'react'
{/* <FontAwesomeIcon icon={faHeart} style={{color: "#ed333b",}} /> */}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import SMS from '/src/assets/Butonsms.svg'
import replies from '/src/assets/Butonreplies.svg'
import likes from '/src/assets/Butonlike.svg'
import download from '/src/assets/Butontelechargement.svg'
import Img from './Image';
import tweets from '/home/user-16-c2/Documents/react/ProjetTwitter/projetwiter/src/J-SON/tweets-x.json'

export default function Tweets(props) {
    const [countLike, setCountLike] = useState(0)
    const formatDate= (date)=>{
        return new Date(date).getUTCDate()
    }

    const handleLike = ()=>{
        console.log('button');
        setCountLike(countLike+1)
    };  
    return tweets.map((tweet)=>(
                    <div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 " key= {tweet.id}>
                        <Img src={tweet.author_avatar} style="h-12 rounded-full"/>
                        <div className=' '>
                            <span className='text-white'>{tweet.source}</span>
                            {(tweet.isVerified == true) && <span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>}
                            <span className='text-zinc-600'>@{tweet.source}.</span>
                            <span className='text-zinc-600'>{formatDate(tweet.date)}min</span>
                            <p className='text-white pb-4 pt-2 text-base'>{tweet.text}</p>
                            {(tweet.image) && <Img src={tweet.image} style="rounded-2xl w-82 "/>}
                            <div className='grid grid-cols-8 text-white  mt-4  item-center justify-between' >
                                <Img src={SMS} style="mb-1"/>
                                <span className='pt-1'>{tweet.replies}</span>
                                <Img src={replies} style="mb-1" />
                                <span className='pt-1'>{tweet.retweets}</span>
                                <Img src={likes} style="mb-1 " onClick={handleLike}/>
                                <span className='pt-1'> {countLike}</span>
                                <Img src={download} style="mb-1"/>
                                <span className='pt-1'>4</span>
                            </div>
                        </div>
                    </div>
                
                ))
            }