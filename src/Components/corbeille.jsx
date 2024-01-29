// import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
// import SMS from '/src/assets/Butonsms.svg'
// import replies from '/src/assets/Butonreplies.svg'
// import likes from '/src/assets/Butonlike.svg'
// import download from '/src/assets/Butontelechargement.svg'
// import Img from './Image';
// import ActionItem from './ActionItem';
// import axios from 'axios';

// // const startUrl = ""
// // export default function Tweets() {
	
// // 	return (
// // 		<div>
// // 			<ComponentTweet/>
// // 		</div>
// // 	)
// // }
// export default function ComponentTweet(props){
// 	const [tweets, setTweets] = useState([]);
// 	const [users, setUsers] = useState([])

// 	// const dataApi= "https://my-json-server.typicode.com/amare53/twiterdb"
// 	// const api= dataApi.json()
// 	// console.log(api);
//     const formatDate= (date)=>{
//         return new Date(date).getUTCDate()
//     }
//     const handleLike = (id, type = null) => {
//         let updatedTweet = tweets.map((tweet) => {
//             if(tweet.id === id) {
//                 return ({...tweet, like : (type == 'LIKE') ? parseInt(tweet['like']) + 1 : tweet['like'] - 1 })
//             } 
//             return tweet;
//         })
//         setTweets(updatedTweet);
//     };
// 	useEffect(()=>{
// 		axios.get('https://my-json-server.typicode.com/amare53/twiterdb/posts')
// 		.then((response,error)=>{
// 			if(!response || error){
// 				console.log(`${error}`);
// 			}else{
// 				console.log(response.data);
// 				setTweets(response.data);
// 			}
// 		})
// 	},[])
// 	useEffect(()=>{
// 		axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users')
// 	.then((response)=>{
// 		setUsers(response.data);
// 		console.log(response.data);
// 		}
// 	)
// 	},[])
// /**on filtre le tableau des utilisateurs 
//  * qui va nos rnevoyer bcp d'éléments dont un seul qui réppond à notre critère
//  * et c'est lui qu'on affiche car il sera le [0]
//  */
// 	const getUserName= (userId)=>{
// 		return users.filter((user) => userId ==user.id)[0].name
// 		// return users.map((user)=>{
// 		// 	if(userId===user.id){
// 		// 		return user.name
// 		// 	}
// 		// });
// 	}
// 	const getUserProfile= (useridentifiant)=>{
// 		return users.filter((user) => useridentifiant==user.id)[0].profil;
// 	}
// 	const getUserSurname= (userId)=>{
// 		return users.filter((user) => userId==user.id)[0].username;
// 	}
// 	const getUserTime= (userId)=>{
// 		return users.filter((user) => userId==user.id)[0].Joined;
// 	}

// 	return tweets.map((tweet)=>(
// 		<div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 mt-3" key= {tweet.id} >
// 			<Img src={getUserProfile(tweet.userId)} style="h-12 rounded-full"/>
// 			<div className=' '>
// 				<span className='text-white'>{getUserName(tweet.userId)}</span>
// 				{(tweet.isVerified == true) && <span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>}
// 				<span className='text-zinc-600'>@{getUserSurname(tweet.userId)}.</span>
// 				<span className='text-zinc-600'>{getUserTime(tweet.userId)}</span>
// 				<p className='text-white pb-4 pt-2 text-base'>{tweet.body}</p>
// 				{(tweet.url) && <Img src={tweet.url} style="rounded-2xl min-w-full max-h-80"/>}
// 				<div className='grid grid-cols-4 text-white  mt-4  item-center justify-between' >
// 					<ActionItem icon={SMS} count={tweet.repost} />
// 					<ActionItem icon={replies} count={tweet.retweets} />
// 					{(tweet.like) && <ActionItem icon={likes} count={tweet.like} id={tweet.id} handleLike={handleLike} />}
// 					<ActionItem icon={download}/>
// 				</div>
// 			</div>
// 		</div>
// 	))
// }

