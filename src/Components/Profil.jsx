import Img from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft,faLock} from '@fortawesome/free-solid-svg-icons';
import ProfilHeader from "./ProfilHeader";
import Profile from "/src/assets/Private.svg";
export default function Profil(){
        return(
        <div>
            <div className="flex container gap-6 px-6 h-16 content-center items-center">
                <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} />
                <ProfilHeader  title="Lydie Dunia" num="0 Posts"/>
            </div>
            <div className="bg-slate-800 h-48">
            </div>
            <div className=" h-48 px-6">

                <div class="pb-10 w-36 h-36 bg-sky-500 rounded-full border-4 border-black justify-center items-center text-center p-5 shadow-x relative left-5 bottom-20 ">
                    <h1 className="text-8xl text-white">L</h1>
                </div>
                <div className="content-start ">
                <ProfilHeader  title="Lydie Dunia" num="@Lydie89236"/>

                </div>
            </div>
        </div>
    )
}

