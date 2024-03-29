// import photoProfile from '/src/assets/Profile-Photo.svg';
import form1 from '/src/assets/TopTweets-form.svg';
import form2 from '/src/assets/TopTweets2-fom.svg';
import form3 from '/src/assets/TopTweets3-form.svg';
import form4 from '/src/assets/TopTweets4-form.svg';
import form5 from '/src/assets/TopTweets5-form.svg';
import Buttons from './Buttons';
import Img from './Image';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';


export default function Form({user}) {
    const [postData, setPostData] = useState([{
        userId: 2,
        id:9,
        title:"",
        body:"",
        like:1200,
        repost: 3
    }])

    const handleInput= (event)=>{
        console.log("event.target.value" + event.target.value);
        console.log("postdata:" + postData);
        setPostData({...postData,[event.target.name]:event.target.value})

    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('https://my-json-server.typicode.com/amare53/twiterdb/posts', {postData})
        .then(response => console.log("response:" + response))

        .catch(error => console.log(error))

    }

    return(
        <div className='flex h-32 gap-x-2.5 justify-start border-b border-slate-800 p-4'>
            <Link to="/profil">
                <Img src={user.thumbnailProfil} style="h-12 rounded-full"/>
            </Link>
            <form className='container flex flex-col mr-4 gap-y-4 ' onSubmit={handleSubmit}>
                <div className=' h-6 justify-center mt-5 w-48'>
                    <div action="" className='h-6' >
                        <input type="text" placeholder="What's happening?" className='w-48 bg-black focus:outline-none caret-white text-white ' onChange={handleInput} name="body"/>
                    </div>
                </div>
                <div className='flex container gap-x-72 items-end justify-between'>
                    <div className='grid grid-cols-5 h-12 pt-2'>
                        <Buttons><Img src={form1}/></Buttons>
                        <Buttons><Img src={form2}/></Buttons>
                        <Buttons><Img src={form3}/></Buttons>
                        <Buttons><Img src={form4}/></Buttons>
                        <Buttons><Img src={form5}/></Buttons>   
                    </div>
                    <Buttons type='submit' style='text-white h-10 bg-sky-500/75 rounded-full pt-3 w-20 pb-8  opacity-75' name="Tweet"></Buttons>
                </div>
            </form>
        </div>
    ) 
}
