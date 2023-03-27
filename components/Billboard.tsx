import React, { useCallback, useEffect, useRef, useState } from 'react';

import PlayButton from '@/components/PlayButton';
import useBillboard from '@/hooks/useBillboard';

const Billboard: React.FC = () => {
  
  const { data } = useBillboard();
  const reload = () => window.location.reload(); 

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState(0);
  const duration2 = duration;

  const handlePlay = (song: any) => {
    if (audioRef.current !== null) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(song);
    audioRef.current = newAudio;
    setDuration(audioRef.current.duration);

    // Update the duration state when the audio is loaded
    audioRef.current.addEventListener("loadedmetadata", () => {
      if(audioRef.current === null){
        return null;
      }
      else{
        setDuration(audioRef.current.duration);
      }
    });
  };

  useEffect(() => {
    handlePlay(data?.songUrl);
  }, [data?.songUrl])

  return (
    <div className="lg:relative fixed z-10 h-[56.25vw]">
      <video poster="/images/hero.jpg" className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src="/videos/hero1.mp4"></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <div className='cursor-none'>
        <p className="text-white text-2xl md:text-5xl h-full w-[100%] lg:text-6xl font-bold drop-shadow-xl animate-slideDown " id='title'>
            {data?.title}
        </p>
        <p className="text-white text-[16px] md:text-lg mt-1 lg:mt-3 md:mt-1 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl animate-slideDown " id='album'>
            {data?.albumName}
        </p>
        <p className="text-white text-[16px] md:text-lg mt-1 lg:mt-3 md:mt-2 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl " id='singer'>
            {data?.singer}
        </p>
        </div>
        <div className="flex lg:flex-row items-center mt-3 mr-1 md:mt-4 gap-1">
          <PlayButton songUrl={data?.songUrl} duration={duration2}/>
          <button
            onClick={reload}
            className="
            bg-white
            text-white
              bg-opacity-10 
              rounded-md 
              lg:py-1 md:py-2 
              lg:px-2 md:px-4
              mr-2
              w-auto 
              text-[11px] lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >
              Random Song
          </button>
        </div>
      </div>
    </div>
  )
}
export default Billboard;