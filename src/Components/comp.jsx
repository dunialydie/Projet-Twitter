import { Children } from "react";

export default function Comp(props){

    return(
        <div className="flex gap-x-1.5">
            <div>
                {props.Children}
            </div>
            <div>
                {props.Children}
            </div>
        </div>
       

    )

}