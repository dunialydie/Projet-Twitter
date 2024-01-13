import Search from "./search"
import TrendsList from "./Trendlist"
import Follow from "./Followers"
export default function Trends(){
    return(
        <div className=" border-2 border-red-600 text-white basis-1/3">
            <Search/>
            <TrendsList/>
            <Follow/>
        </div>
    )
}