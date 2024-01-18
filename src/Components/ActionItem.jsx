import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Img from './Image';

export default function ActionItem({icon, count, id, handleLike }) {
    const[action, setActive] = useState(false);
    let color = action ? 'text-red-600': null;

    const handleClick = () => {
        setActive(!action);
        if(action) {
            handleLike(id);
        }
        else {
            handleLike(id, 'LIKE');
        }
    }

    return(
        <div className='flex items-center' onClick={handleClick}>
            {
                (action) ? <FontAwesomeIcon icon={faHeart} className={color}/> : <Img src={icon} style="mb-1"/>
            }
            <span className={`pt-1 ${color}`} >{count}</span>
        </div>
    );
}







//   const[liked, setLiked] = useState(false);
//   const [countLike, setCountLike] = useState(tweets)
//   console.log(liked);
//   const handleClick = () => {
//     setLiked(!liked);
//     setCountLike(...tweets,tweets.favorites + 1)

//   };
 
// };
//   if(liked)
//     return (
//     <>
//         <FontAwesomeIcon icon={faHeart} style={{color: "#ed333b",}} onClick={handleClick}/>
//         <span className='pt-1'> {tweets.favorites}</span>
//     </>)
//     return (<FontAwesomeIcon icon={faHeart} onClick={handleClick}/>);  

// }
