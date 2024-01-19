import Img from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import ProfilHeader from "./ProfilHeader";
import LinkProfil from "./LinkProfil";
import Buttons from "./Buttons";
import {Word,Conteur} from "./conteur";
export default function Profil(){
        return(
        <div>
            <div className="flex container gap-6 px-6 h-16 content-center items-center">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                <ProfilHeader  title="Lydie Dunia" num="0 Posts"/>
            </div>
            <div className="bg-slate-800 h-48">
                <div class="pb-10 w-36 h-36 bg-sky-500 rounded-full border-4 border-black justify-center items-center text-center p-5 shadow-x relative left-6 top-28 ">
                    <h1 className="text-8xl text-white">L</h1>
                </div>
            </div>
            <div className="px-6 mb-6">
                <div className="flex justify-between">
                    <div className="pt-20">
                        <ProfilHeader  title="Lydie Dunia" num="@Lydie89236" style="mb-3"/>
                        <FontAwesomeIcon icon={faCalendarDays} style={{color: "#5e5c64",}} />
                        <span className="text-zinc-600 pt-3 ml-4">Joined January 2024</span>
                        <div className="flex gap-3 mt-3">
                            <Conteur count={1}>
                                <Word word="Following"/>
                            </Conteur>
                            <Conteur count={0}>
                                <Word word="Followers"/>
                            </Conteur>
                        </div>
                    </div>
                    <div className="">
                    <Buttons name="Edit Profile" style="text-white px-4 py-2 rounded-full font-bold min-w-32 p-0 border mt-4 hover:opacity-75"/>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-5 px-6  border-b border-slate-800 pb-4">
                <LinkProfil title="Posts" style="text-white "/>
                <LinkProfil title="Replies" style="text-zinc-600 "/>
                <LinkProfil title="Highlights" style="text-zinc-600" />
                <LinkProfil title="Media" style="text-zinc-600 "/>
                <LinkProfil title="Likes" style="text-zinc-600 3"/>
            </div>
           

        </div>
    )
}

