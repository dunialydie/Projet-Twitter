import Buttons from "./Buttons";
import topTweets from '/src/assets/Top-Tweets.svg';
import Img from "./Image";

export default function Header(props) {

    return(
        <div className="">
            <div className="py-3 flex justify-between px-8 text-white content-center items-center border-b border-slate-800 ">
                <nav className="font-semibold">Home</nav>
                <Buttons>
                    <Img src={topTweets} />
                </Buttons>
            </div>
        </div>
        
    )
    
}