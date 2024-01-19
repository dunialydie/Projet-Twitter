import {Link } from "react-router-dom";
export default function MenuLink(props){
    return(
        <div className= " flex text white font-bold gap-6 pb-5 hover:opacity-75">
            <img src={props.src} />
            <Link to ={props.to}>{props.title}</Link>
        </div>
    )
}