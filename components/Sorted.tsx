import React from "react"
import { useRouter } from "next/router";

interface SortedProps{
    title: string;
    link: string;
    img: string;
}

const Sorted:React.FC<SortedProps> = ({title, link, img}) => {
    const router = useRouter();
    return(
        <div 
        style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}}
        className="text-white lg:w-[300px] h-[200px] m-4 lg:mr-8 rounded-lg">
            <div
                className="bg-zinc-900 h-full bg-opacity-60 hover:bg-opacity-40 transition duration cursor-pointer flex flex-col items-center justify-center"
            >
            <p 
                className="text-8xl font-thin" 
                onClick={()=>router.push(`${link}`)}
            >
                {title}
            </p>
            
            </div>
            
        </div>
    )
}

export default Sorted;