import ComponentTweet from "./ComponentTweet";
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function MapOneUser(){
    const [user,setUser]=useState([])
  const [posts,setPosts]=useState([])
  const handleLike = (id, type = null) => {
    let updatedTweet = posts.map((tweet) => {
        if(tweet.id === id) {
            return ({...tweet, like : (type == 'LIKE') ? parseInt(tweet['like']) + 1 : tweet['like'] - 1 })
        } 
        return tweet;
    })
    setPosts(updatedTweet);
};


  useEffect(()=>{
      axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users/2')
      .then((response)=>{
          // console.log(response);
          setUser(response.data)
      })
  },[])

  useEffect(()=>{
    axios.get('https://my-json-server.typicode.com/amare53/twiterdb/users/2/posts')
    .then((response)=>{
        console.log(response.data);
        // console.log("posts:" + posts);

        setPosts(response.data)
    })
},[])

    return posts.map((post)=>(
        <div key= {post.id}>
            <ComponentTweet userId= {user.thumbnailProfil} name={user.name} username={user.username} joined={user.joined} body={post.body} url={post.url} repost={post.repost} like={post.like} id={post.id} handleLike={handleLike}/>
        </div>
    ))
}