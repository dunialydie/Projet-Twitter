import Buttons from "./Buttons";
import topTweets from '/src/assets/Top-Tweets.svg';
import Img from "./Image";

export default function Header(props) {

    return(
        <div className="h-12 flex justify-between px-8 text-white content-center items-cente border-b border-slate-800" >
            <nav className="">Home</nav>
            <Buttons>
                <Img src={topTweets}/>
            </Buttons>
        </div>
    )
    
}