import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import SMS from '/src/assets/Butonsms.svg'
import replies from '/src/assets/Butonreplies.svg'
import likes from '/src/assets/Butonlike.svg'
import download from '/src/assets/Butontelechargement.svg'
import Img from './Image';
import ActionItem from './ActionItem';



export default function ComponentTweet(props){
	

	return (
		<div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 mt-3"  >
			<Img src={props.userId} style="h-12 rounded-full"/>
			<div className=' '>
				<span className='text-white'>{props.name}</span>
				<span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>
				<span className='text-zinc-600'>@{props.username}.</span>
				<span className='text-zinc-600'>{props.joined}</span>
				<p className='text-white pb-4 pt-2 text-base'>{props.body}</p>
				{(props.url) && <Img src={props.url} style="rounded-2xl min-w-full max-h-80"/>}
				<div className='grid grid-cols-4 text-white  mt-4  item-center justify-between' >
					<ActionItem icon={SMS} count={props.repost} />
					<ActionItem icon={replies} count={props.retweets} />
					<ActionItem icon={likes} count={props.like} id={props.id} handleLike={props.handleLike}/>
					<ActionItem icon={download}/>
				</div>
			</div>
		</div>
	)
}

