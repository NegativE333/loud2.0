import React, { useEffect } from 'react';
import { useState } from 'react';

interface PlayButtonProps {
  songUrl: string;
  duration: number;
}

const PlayButton:React.FC<PlayButtonProps> = ({songUrl, duration}) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if(currentTime>=0){
      setTimeout(()=>setCurrentTime(currentTime+1), 1000);
    }
    if(currentTime>20){
      if(currentTime>=duration+3){
      window.location.reload();
      }
    }
    
  }, [currentTime])
 
  return (
    <button 
      className="
        rounded-md 
        lg:py-1 md:py-2 
        lg:px-2 md:px-4
        lg:w-auto
        w-[80%]
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      >
        <audio 
            controls  
            autoPlay
            id="audio"
            src={songUrl}
            className="h-[37px] w-[300px] lg:h-[45px]"
        />
    </button>
  );
}

export default PlayButton;