import Listfollowers from "./Listfollowers";
import Buttons from "./Buttons";

export default function Follow(){
     return(
        <div className="text-white bg-slate-800 gap-x-3 px-5 mt-4 rounded-2xl p-4">
        <div className="flex justify-between pb-4 font-bold text-xl">
            <h3>Who to follow</h3>
        </div>
        <Listfollowers/>
        <Buttons name="Show more" style="font-bold text-sky-400 text-base"/>
    </div>
    
     )
}