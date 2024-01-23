import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock} from '@fortawesome/free-solid-svg-icons';

export default function ProfilHeader(props){
    return(
        <div className={props.style}>
                <span className=" text-white pr-3 font-bold text-lg">{props.title}</span>
                <span><FontAwesomeIcon icon={faLock} style={{color: "#ffffff",}}/></span>
                <p className='text-zinc-600 pt-3'>@{props.num}</p>
        </div>
    )
}