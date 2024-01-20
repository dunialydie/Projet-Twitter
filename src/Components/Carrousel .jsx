import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {faUser, faArrowRight, faUserPlus, faMessage, faBell} from '@fortawesome/free-solid-svg-icons';
import Caro from './Carossel';

export default function Carrousel(){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <>
    <Carousel responsive={responsive} className='text-white py-4 items-center'>
        <Caro style="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex justify-center h-32 content-center items-center rounded-2xl" icon={faUserPlus} title="Follow 5 accounts" design="mt-3 font-medium" size="xl"/>
        <Caro style="bg-gradient-to-r from-red-800 via-fuchsia-500 to-red-800 flex justify-center h-32 content-center items-center rounded-2xl" icon={faUser} title="Complete your profile" design="mt-3 font-medium" size="xl"/>
        <Caro style="bg-gradient-to-r from-fuchsia-500 via-red-600 to-lime-600 flex justify-center h-32 content-center items-center rounded-2xl" icon={faMessage} title="Follow 3 topics" design="mt-3 font-medium" size="xl"/>
        <Caro style="bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600 flex justify-center h-32 content-center items-center rounded-2xl" icon={faBell} title="Turn on notifications" design="mt-3 font-medium" size="xl"/>
        <div className='pr-4  mt-6 grid grid-rows-2 justify-center content-center items-center ' >
            <Caro style="flex justify-center h-10 w-10 content-center items-center rounded-full bg-cyan-500" icon={faArrowRight} title="Learn more" design="text-sky-400 mt-1" size= "sm" />
        </div>
    </Carousel>;
    </>
    )
}

