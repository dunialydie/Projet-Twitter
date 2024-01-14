import Buttons from "./Buttons"
import Img from "./Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';


const tab = [
    {title:"The New York Times",
    isVerified: true,
    tag:"@Newyork time",
    image: "/src/assets/image 1.svg"
    },
    {title:"CNN",
    isVerified: false,
    tag:"@CNN",
    image: "/src/assets/image 1.svg"
    },
    {title:"Twitter",
    isVerified: true,
    tag:"@Twitter",
    image: "/src/assets/image 1.svg"
    }
]

export default function Listfollowers(){
    return tab.map((follows)=>(
        <div className="flex text-white justify-between pb-4 hover:opacity-75">
            <div className="flex gap-x-4">
                <div>
                    <Img src={follows.image}/>
                </div>
                <div>
                    <span className='text-slate-300'>{follows.title}</span>
                    {(follows.isVerified == true) && <span className='text-white '><FontAwesomeIcon icon={faCircleCheck} /></span>}
                    <p className='text-zinc-600'>@{follows.tag}.</p>
                </div>
            </div>
            <div>
                <Buttons name="Follow" style="text-black bg-white px-4 py-2 rounded-full"/>
            </div>
        </div>
    )
    )
}