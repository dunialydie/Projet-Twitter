import Buttons from "./Buttons";
import Tweeter from "/src/assets/Twitter.svg";
import Home from "/src/assets/Home-Fill.svg";
import Explore from "/src/assets/Explore.svg";
import Notification from "/src/assets/Notifications.svg";
import Message from"/src/assets/Messages.svg";
import Bookmarks from "/src/assets/Bookmarks.svg";
import Lists from "/src/assets/Lists.svg";
import Profile from "/src/assets/Private.svg";
import More2 from "/src/assets/More-2.svg";
import More from "/src/assets/More.svg"
import photoProfile from '/src/assets/Profile-Photo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock} from '@fortawesome/free-solid-svg-icons';
import Img from "./Image";

export default function Menu(props){
    return(
        <div className="flex-rows justify-between  text-white  basis-1/4 h-full max-h-max ">
            <Img src={Tweeter} style="pb-5 hover:opacity-75"/>
            <div className="flex gap-x-6">
                <div className="font-bold">
                    <Img src={Home} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={Explore} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={Notification} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={Message} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={Bookmarks} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={Lists} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={Profile} style="pb-6 leading-7 hover:opacity-75"/>
                    <Img src={More} style="pb-6 leading-7 hover:opacity-75"/>
                </div>
                <div className="font-bold">
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Home</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Explore</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Notifications</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Messages</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Bookmarks</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Lists</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">Profile</p>
                    <p className="pb-5 text-lg leading-7 hover:opacity-75">More</p>
                </div>
            </div>
            <div className="max-w-48 mt-4">
                <Buttons name="Tweet" style="text-white px-4 py-2 rounded-full bg-cyan-500 font-semibold item-center container hover:opacity-75"/>
            </div>
            <div className="flex mt-80 gap-x-4 font-bold text-base hover:opacity-75">
                <div>
                    <Img src= {photoProfile} style="h-12 rounded-full"/>
                </div>
                <div>
                    <span>Lydie Dunia</span>
                    <span><FontAwesomeIcon icon={faLock} /></span>
                    <p className='text-zinc-600'>@Lydie</p>
                </div>
                <Img src={More2} style="ml-24"/>
            </div>
        </div>
    )
}