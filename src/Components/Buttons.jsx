export default function Buttons(props){
    return <button type = "button" className={props.style}>
                {props.name}
                {props.children}
            </button>
}


