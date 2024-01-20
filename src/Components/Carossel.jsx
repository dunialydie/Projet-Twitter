import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Caro(props){
    return(
    <>
        <div className='pr-4' >
            <div className={props.style}>
                <FontAwesomeIcon icon={props.icon} size= {props.size} style={{color: "#ffffff",}} />
            </div> 
            <p className={props.design}>
                {props.title}
            </p>
        </div>
    </>
    )
}