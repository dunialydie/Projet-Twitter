import Buttons from "./Buttons"
import Setting from "/src/assets/Settings.svg"
import Img from "./Image";
import Listrend from "./Listrend";

export default function TrendsList(){
return(
    <div className="text-white bg-slate-800 gap-x-3 px-5 mt-4 rounded-2xl p-4">
        <div className="flex justify-between pb-4">
        <h3>Trends for you</h3>
        <Img src={Setting}/>
        </div>
        <Listrend/>
        <Buttons name="Show more" style="font-bold text-sky-400 text-base"/>
    </div>
    

)
}