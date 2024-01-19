import { useState } from 'react'
{/* <FontAwesomeIcon icon={faHeart} style={{color: "#ed333b",}} /> */}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import SMS from '/src/assets/Butonsms.svg'
import replies from '/src/assets/Butonreplies.svg'
import likes from '/src/assets/Butonlike.svg'
import download from '/src/assets/Butontelechargement.svg'
import Img from './Image';
import LikeButton from './ActionItem';
import TWEETS from '/home/user-16-c2/Documents/react/ProjetTwitter/projetwiter/src/J-SON/tweets-x.json'
import ActionItem from './ActionItem';

export default function Tweets(props) {

    const [tweets, setTweets] = useState(TWEETS)
    const formatDate= (date)=>{
        return new Date(date).getUTCDate()
    }
    const handleLike = (id, type = null) => {
        let updatedTweet = tweets.map((tweet) => {
            if(tweet.id === id) {
                return ({...tweet, favorites : (type == 'LIKE') ? parseInt(tweet['favorites']) + 1 : tweet['favorites'] - 1 })
            } 
            return tweet;
        })
        setTweets(updatedTweet);
      };
    return tweets.map((tweet)=>(
                    <div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 mt-3" key= {tweet.id}>
                        <Img src={tweet.author_avatar} style="h-12 rounded-full"/>
                        <div className=' '>
                            <span className='text-white'>{tweet.source}</span>
                            {(tweet.isVerified == true) && <span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>}
                            <span className='text-zinc-600'>@{tweet.source}.</span>
                            <span className='text-zinc-600'>{formatDate(tweet.date)}min</span>
                            <p className='text-white pb-4 pt-2 text-base'>{tweet.text}</p>
                            {(tweet.image) && <Img src={tweet.image} style="rounded-2xl min-w-full max-h-80"/>}
                            <div className='grid grid-cols-4 text-white  mt-4  item-center justify-between' >
                                <ActionItem icon={SMS} count={tweet.replies} />
                                <ActionItem icon={replies} count={tweet.retweets} />
                                <ActionItem icon={likes} count={tweet.favorites} id={tweet.id} handleLike={handleLike} />
                                <ActionItem icon={download}/>
                            </div>
                        </div>
                    </div>
                
                ))
            }