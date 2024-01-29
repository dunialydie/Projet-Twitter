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
// import ComponentTweet from './ComponentTweet';

// const startUrl = ""
// export default function Tweets() {
	
// 	return (
// 		<div>
// 			<ComponentTweet/>
// 		</div>
// 	)
// }
export default function Tweets(){
	const [tweets, setTweets] = useState([]);
	const [users, setUsers] = useState([])

    const handleLike = (id, type = null) => {
        let updatedTweet = tweets.map((tweet) => {
            if(tweet.id === id) {
                return ({...tweet, like : (type == 'LIKE') ? parseInt(tweet['like']) + 1 : tweet['like'] - 1 })
            } 
            return tweet;
        })
        setTweets(updatedTweet);
    };

	// const getUser = async (id) => {
	// 	try{
	// 		return await axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users/' + id)
	// 	}catch (error){
	// 		console.log(`${error}`);
	// 		return false;	
	// 	}
	// 	// let response = await axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users/' + id)
	// 	// .then((response,error)=>{
	// 	// 	if(!response || error){
	// 	// 		console.log(`${error}`);
	// 	// 	}else{
	// 	// 		console.log("datauser:" + response.data);
	// 	// 		// setTweets(response.data);
	// 	// 	}
	// 	// })
	// }

	// const getTweets = () => {
	// 	axios.get('https://my-json-server.typicode.com/amare53/twiterdb/posts')
	// 	.then((response,error)=>{
	// 		if(!response || error){
	// 			console.log(`${error}`);
	// 		}else{
				// //console.log("postdata:" + response.data);
				// const tempData = [];
				// response.data.map( async(tweet) => {
				// 	console.log('jjjjjjj:'+ getUser(1))
				// 	Promise.all(getUser(tweet.userId)).then((user) => {
				// 		// log(tweet.id)
				// 		if(user) {
				// 			tempData.push({...tweet, user: user.data})
				// 		}
				// 	}).catch(
				// 		erreur => { console.log('CATCH_A => ',erreur)}
				// 	)
					
				// })
				//  setTweets(response.data);
				// console.log("tempData.user.name",tempData);
				// setTweets(tempData);

		
	// 	})
	// }

	useEffect(()=>{
		axios.get('https://my-json-server.typicode.com/amare53/twiterdb/posts')
		.then((response,error)=>{
			if(!response || error){
				console.log(`${error}`);
			}else{
				setTweets(response.data);
			}
		})
		
		// getTweets();
	},[])
	useEffect(()=>{
		axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users')
	.then((response)=>{
		setUsers(response.data);
		console.log(response.data);
		}
	)
	},[])

/**on filtre le tableau des utilisateurs 
 * qui va nos rnevoyer bcp d'éléments dont un seul qui réppond à notre critère
 * et c'est lui qu'on affiche car il sera le [0]
 */
	const getUserName= (userId)=>{
		// return users.filter((user) => userId ==user.id)?.name
		return users.map((user)=>{
			if(userId===user.id){
				return user.name
			}else{
				return false
			}
		});
	}
	const getUserProfile= (userId)=>{
		return users.filter((user) => userId==user.id)[0].profil;
		// return users.filter((user)=>{
		// 	if(userId===user.id){
		// 		console.log('user:' + user.profi);
		// 		return user.profil
		// 	}else{
		// 		return false
		// 	}
		// });
	}
	const getUserSurname= (userId)=>{
		//return users.filter((user) => userId==user.id)?.username;
		return users.map((user)=>{
			if(userId===user.id){
				return user.username
			}else{
				return false
			}
		});
	}
	const getUserTime= (userId)=>{
		//return users.filter((user) => userId==user.id)?.Joined;
		return users.map((user)=>{
			if(userId===user.id){
				return user.Joined
			}else{
				return false
			}
		});
	}

	return tweets.map((tweet)=>(
		<div className="flex px-5 gap-x-3 border-b border-slate-800 hover:opacity-60 mt-3" key= {tweet.id} >
			<Img src={getUserProfile(tweet.userId)} style="h-12 rounded-full"/>
			<div className=' '>
				<span className='text-white'>{getUserName(tweet.userId)}</span>
				<span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>
				<span className='text-zinc-600'>@{getUserSurname(tweet.userId)}.</span>
				<span className='text-zinc-600'>{getUserTime(tweet.userId)}</span>
				<p className='text-white pb-4 pt-2 text-base'>{tweet.body}</p>
				{(tweet.user) && <Img src={tweet.user} style="rounded-2xl min-w-full max-h-80"/>}
				<div className='grid grid-cols-4 text-white  mt-4  item-center justify-between' >
					<ActionItem icon={SMS} count={tweet.repost} />
					<ActionItem icon={replies} count={tweet.retweets} />
					<ActionItem icon={likes} count={tweet.like} id={tweet.id} handleLike={handleLike} />
					<ActionItem icon={download}/>
				</div>
			</div>
		</div>
	))
}
