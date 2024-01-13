import Search from "./search"
import TrendsList from "./Trendlist"
import Follow from "./Followers"
import Footer from "./Footer"
export default function Trends(){
    return(
        <div className="basis-1/3">
            <Search/>
            <TrendsList/>
            <Follow/>
            <Footer/>
        </div>
    )
}