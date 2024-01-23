import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import SMS from '/src/assets/Butonsms.svg'
import replies from '/src/assets/Butonreplies.svg'
import likes from '/src/assets/Butonlike.svg'
import download from '/src/assets/Butontelechargement.svg'
import Img from './Image';
import ActionItem from './ActionItem';
import axios from 'axios';

// const startUrl = ""
export default function Tweets() {
	const [tweets, setTweets] = useState([]);
    const formatDate= (date)=>{
        return new Date(date).getUTCDate()
    }
    const handleLike = (id, type = null) => {
        let updatedTweet = tweets.map((tweet) => {
            if(tweet.id === id) {
                return ({...tweet, like : (type == 'LIKE') ? parseInt(tweet['like']) + 1 : tweet['like'] - 1 })
            } 
            return tweet;
        })
        setTweets(updatedTweet);
    };
	useEffect(()=>{
		axios.get('https://my-json-server.typicode.com/amare53/twiterdb/posts')
		.then((response,error)=>{
			if(!response || error){
				console.log(`${error}`);
			}else{
				console.log(response.data);
				setTweets(response.data);
			}
		})
	},[])

    return tweets.map((tweet)=>(
                    <div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 mt-3" key= {tweet.id} >
                        <Img src={tweet.thumbnailUrl} style="h-12 rounded-full"/>
                        <div className=' '>
                            <span className='text-white'>{tweet.title}</span>
                            {(tweet.isVerified == true) && <span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>}
                            <span className='text-zinc-600'>@{tweet.source}.</span>
                            <span className='text-zinc-600'>{formatDate(tweet.date)}min</span>
                            <p className='text-white pb-4 pt-2 text-base'>{tweet.body}</p>
                            {(tweet.url) && <Img src={tweet.url} style="rounded-2xl min-w-full max-h-80"/>}
                            <div className='grid grid-cols-4 text-white  mt-4  item-center justify-between' >
                                <ActionItem icon={SMS} count={tweet.repost} />
                                <ActionItem icon={replies} count={tweet.retweets} />
                                {(tweet.like) && <ActionItem icon={likes} count={tweet.like} id={tweet.id} handleLike={handleLike} />}
                                <ActionItem icon={download}/>
                            </div>
                        </div>
                    </div>
                
                ))
            }