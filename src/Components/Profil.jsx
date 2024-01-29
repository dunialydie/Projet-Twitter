import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import ProfilHeader from "./ProfilHeader";
import LinkProfil from "./LinkProfil";
import Buttons from "./Buttons";
import {Word,Conteur} from "./conteur";
import Listfollowers from "./Listfollowers";
import Carrousel from "./Carrousel ";
import Img from "./Image";
// import ComponentTweet from "./ComponentTweet";
import MapOneUser from "./mapOneUser";
// import Tweets from "./Tweets";
export default function Profil({user, posts}){
        return(
        <div className="snap-sandatory overflow-y-scroll no-scrollbar h-screen">
            <div className="flex container gap-6 px-6 h-16 content-center items-center ">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                <ProfilHeader  title={user.name} num="0 Posts"/>
            </div>
            <div className="bg-slate-800 h-48">
                <div className="pb-10 w-36 h-36 rounded-full border-4 border-black justify-center items-center text-center p-5 shadow-x relative left-6 top-28 ">
                <Img src= {user.thumbnailProfil} style="rounded-full "/>
                    {/* <h1 className="text-8xl text-white">L</h1> */}
                </div>
            </div>
            <div className="px-6 mb-6">
                <div className="flex justify-between">
                    <div className="pt-20">
                        <ProfilHeader  title={user.name} num={user.username} style="mb-3"/>
                        <FontAwesomeIcon icon={faCalendarDays} style={{color: "#5e5c64",}} />
                        <span className="text-zinc-600 pt-3 ml-4">{user.Joined}</span>
                        <div className="flex gap-3 mt-3">
                            <Conteur count={1}>
                                <Word word="Following" style="text-zinc-600"/>
                            </Conteur>
                            <Conteur count={0}>
                                <Word word="Followers" style="text-zinc-600"/>
                            </Conteur>
                        </div>
                    </div>
                    <div className="">
                    <Buttons name="Edit Profile" style="text-white px-4 py-2 rounded-full font-bold min-w-32 p-0 border mt-4 hover:opacity-75"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 px-6  border-b border-slate-800 pb-4 hover:opacity-75 ">
                <LinkProfil title="Posts" style="text-white hover:underline decoration-4"/>
                <LinkProfil title="Replies" style="text-zinc-600 hover:underline decoration-4"/>
                <LinkProfil title="Highlights" style="text-zinc-600 hover:underline decoration-4" />
                <LinkProfil title="Media" style="text-zinc-600 hover:underline decoration-4"/>
                <LinkProfil title="Likes" style="text-zinc-600 hover:underline decoration-4"/>
            </div>
            <div className="px-6 border-b border-slate-800 mt-4">
                <Word word="Let's get you set up" style=" text-white font-bold text-xl "/>
                <Carrousel/>
            </div>
            <div className="px-6 border-b border-slate-800 mt-4">
                <MapOneUser/>            
            </div>

            <div className="px-6 py-4">
            <div className="flex justify-between pb-4 font-bold text-xl text-white">
            <h3>Who to follow</h3>
            </div>
            <Listfollowers/>
            </div>
        </div>
    )
}

