import search from '/src/assets/Search.svg'
import Img from "./Image";

export default function Search(){
    return(
        <div className='flex h-11 items-center rounded-full bg-slate-700 gap-x-3 px-5'>
            <Img src={search} style= 'h-5 '/>
            <input type="text" placeholder='Search' className='focus:outline-none caret-white text-white bg-inherit'/>
        </div>
       
    )
}