
export function Conteur(props){
    return  <span className="text-white">{props.count} {props.children} </span>
}
export  function Word(props){
    return  <span className={props.style}>{props.word} </span>
}