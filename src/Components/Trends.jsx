import Search from "./search"
import TrendsList from "./Trendlist"
import Follow from "./Followers"
import Footer from "./Footer"
export default function     Trends(){
    return(
        <div className="basis-1/3 h-screen">
            <Search/>
            <TrendsList/>
            <Follow/>
            <Footer/>
        </div>
    )
}