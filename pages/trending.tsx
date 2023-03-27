import Navbar from "@/components/Navbar";
import SongList from "@/components/SongList";
import useSongs from "@/hooks/useSongs";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return{
      redirect:{
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props:{}
  }
}


export default function Trending() {
  const { data: song = [] } = useSongs();

  return (
    <>
      <div className="bg-zinc-900 z-40">
        <Navbar active={true}/>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-4 gap-2">
        <div className="lg:w-[40%] lg:mt-40 mt-20">
          <div className="fixed w-full lg:w-[50%] lg:bg-transparent z-30 left-0 top-[9%] pb-8 bg-zinc-900 lg:top-[30%] md:top-[13%] lg:ml-4 md:ml-16">
            <div className="cursor-pointer flex flex-col items-center justify-center lg:text-start text-center lg:justify-start lg:items-start lg:ml-8">
              <p
                id="title"
                className="text-white text-3xl md:text-5xl h-full lg:w-[90%] lg:text-6xl font-bold drop-shadow-xl animate-slideDown "
              >
                Play a song <br></br>you like...
              </p>
              <p
                id="album"
                className="text-white lg:text-[16px] md:text-lg mt-4 md:mt-2 w-[90%] md:w-[80%] lg:w-[100%] drop-shadow-xl animate-slideLeft "
              ></p>
              <p
                id="singer"
                className="text-white lg:text-[16px] md:text-lg mt-3 md:mt-2 w-[90%] md:w-[80%] lg:w-[100%] drop-shadow-xl"
              ></p>
              <button
                className=" 
                  rounded-md 
                  mt-4
                  lg:mt-8
                  w-auto 
                  text-xs lg:text-lg 
                  font-semibold
                  flex
                  flex-row
                  items-center
                hover:bg-neutral-300
                  transition
                  "
              >
                <audio controls autoPlay src="" id="audio" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden lg:w-[70%] lg:mt-[5vw] mt-[55vw] mb-[5vw] lg:ml-[10vw]">
          <SongList title=" " data={song} />
        </div>
      </div>
    </>
  );
}
