import Buttons from "./Buttons";
import Tweeter from "/src/assets/Twitter.svg"

import Img from "./Image";
export default function Menu(){
    return(
        <div className="border-2 border-red-600 text-white">
            <div>
                <Buttons>
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
                <Buttons name="Home">
                    <Img src={Tweeter}/>
                </Buttons>
            </div>
            <div>jjoizjojzeifjzoifj</div>
            <div>jjoizjojzeifjzoifj</div>
        </div>
    )
}