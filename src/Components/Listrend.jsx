import Img from "./Image";
import More2 from "/src/assets/More-2.svg";

const tab = [
    {name:"Trending in Congo-kinshasa",
    Author: "Lydie",
    post:"20Kposts",
    id: "131",
    },
    {name:"Trending in USA",
    Author: "Dian",
    post:"200Kposts",
    id: "121",
    },
    {name:"Trending in UK",
    Author: "Elie",
    post:"40Kposts",
    id: "1331",
    },
    {name:"Trending in Asie",
    Author: "Provi",
    post:"240Kposts",
    id: "141",
    }
]

export default function Listrend(){
    return tab.map((trend)=>(
        <div className="flex text-white justify-between pb-4 hover:opacity-75" key= {trend.id}>
            <div>
                <h2 className="text-zinc-600">{trend.name}</h2>
                <h2>#{trend.Author}</h2>
                <h2 className="text-zinc-600">{trend.post}</h2>
            </div>
            <div>
                <Img src={More2}/>
            </div>
        </div>
    )
    )
}