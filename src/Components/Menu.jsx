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
import Img from "./Image";
import ProfilHeader from "./ProfilHeader";
import MenuLink from "./MenuLink";

export default function Menu({user}){
    return(
        <nav className="flex-rows justify-between  text-white  basis-1/4 h-full max-h-max ">
            <MenuLink src= {Tweeter} to = "/"/>
            <MenuLink src= {Home} to = "/" title = "Home"/>
            <MenuLink src= {Explore} to = "/" title = "Explore"/>
            <MenuLink src= {Notification} to = "/" title = "Notifications"/>
            <MenuLink src= {Message} to = "/" title = "Message" />
            <MenuLink src= {Bookmarks} to = "/" title = "Bookmarks"/>
            <MenuLink src= {Lists} to = "/" title = "Lists"/>
            <MenuLink src= {Profile} to = "/profil" title = "Profile"/>
            <MenuLink src= {More} to = "/" title = "More"/>
            <div className="max-w-48 mt-4">
                <Buttons name="Tweet" style="text-white px-4 py-2 rounded-full bg-cyan-500 font-semibold item-center container hover:opacity-75"/>
            </div>
            <div className="flex mt-80 gap-x-4 font-bold text-base hover:opacity-75">
                <div>
                    <Img src= {user.thumbnailProfil} style="h-12 rounded-full"/>
                </div>
                <div>
                <ProfilHeader  title={user.name} num= {user.username}/>
                </div>
                <Img src={More2} style="ml-24"/>
            </div>
        </nav>
    )
}