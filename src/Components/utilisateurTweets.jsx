import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import SMS from '/src/assets/Butonsms.svg'
import replies from '/src/assets/Butonreplies.svg'
import likes from '/src/assets/Butonlike.svg'
import download from '/src/assets/Butontelechargement.svg'
import Img from './Image';
import ActionItem from './ActionItem';
import { useState, useEffect } from "react";
import axios from 'axios';


export default function TweetsUser({user}){
    const [userposts, setUserposts] = useState([])

    useEffect(()=>{
		axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users/2/posts')
		.then((response,error)=>{
			if(!response || error){
				console.log(`${error}`);
			}else{
				console.log(response.data);
				setUserposts(response.data);
			}
		})
	},[])
	

	return userposts.map((tweet)=>(
		<div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 mt-3" key= {tweet.id} >
			<Img src={user.profil} style="h-12 rounded-full"/>
			<div className=' '>
				<span className='text-white'>{user.name}</span>
				{(tweet.isVerified == true) && <span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>}
				<span className='text-zinc-600'>@{user.username}.</span>
				<span className='text-zinc-600'>{user.Joined}</span>
				<p className='text-white pb-4 pt-2 text-base'>{tweet.body}</p>
				{(tweet.url) && <Img src={tweet.url} style="rounded-2xl min-w-full max-h-80"/>}
				<div className='grid grid-cols-4 text-white  mt-4  item-center justify-between' >
					<ActionItem icon={SMS} count={tweet.repost} />
					<ActionItem icon={replies} count={tweet.retweets} />
					{(tweet.like) && <ActionItem icon={likes} count={tweet.like} id={tweet.id} />}
					<ActionItem icon={download}/>
				</div>
			</div>
		</div>
	))
}


