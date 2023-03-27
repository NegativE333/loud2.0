import { url } from "inspector";
import React, { useEffect, useRef, useState } from "react";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";

interface SongCardProps {
  data: Record<string, any>;
}

const SongCard: React.FC<SongCardProps> = ({ data }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState("");

  const handlePlay = (song: any) => {
    if (currentSong !== song) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setCurrentSong(song);
      const newAudio = new Audio(song);
    //   newAudio.play();
      playAudio();
      audioRef.current = newAudio;
    } else {
      if (audioRef.current?.paused) {
        // audioRef.current?.play();
        playAudio();
      } else {
        audioRef.current?.pause();
      }
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  var x = document.getElementById("myAudio") as HTMLAudioElement;

  function playAudio() {
    setIsPlaying(true);
    let title: HTMLHeadingElement = document.getElementById(
      "title"
    ) as HTMLHeadingElement;
    title.innerText = data.title;

    let album: HTMLHeadingElement = document.getElementById(
      "album"
    ) as HTMLHeadingElement;
    album.innerText = data.albumName;

    let singer: HTMLHeadingElement = document.getElementById(
      "singer"
    ) as HTMLHeadingElement;
    singer.innerText = data.singer;

    let audio: HTMLSourceElement = document.getElementById(
        "audio"
    ) as HTMLSourceElement;
    audio.src = data.songUrl;
  }

  const pauseAudio = () => {
    setIsPlaying(false);
    x.pause();
  };

  return (
    <div 
      style={{backgroundImage: `url(${data.thumbnailUrl})`, backgroundSize: 'cover'}} 
      className="group bg-zinc-900 col-span lg:h-[12vw] h-[150px] w-full lg:w-[240px] rounded-lg ">
      <audio id="myAudio" src={data.songUrl} ref={audioRef} />

      <div className="flex flex-col items-center justify-center bg-zinc-800 bg-opacity-80 hover:bg-opacity-50 transition duration cursor-pointer h-full pb-8 text-white">
        <p className="text-2xl font-semibold text-center">
        {data.title}
        </p>
        <p className="">
          {data.singer}
        </p>
        <p className="">
          {data.albumName}
        </p>
        
      </div>

      <button className="relative bottom-8 left-[45%] text-white cursor-pointer">
        {isPlaying ? (
            <BsPauseCircle
              size={30}
              onClick={() => handlePlay(data.songUrl)}
            />
          ) : (
            <BsPlayCircle
              size={30}
              onClick={() => handlePlay(data.songUrl)}
            />
          )}
          <div className="absolute bottom-0 left-[120px] lg:left-[95px] text-white">
            <FavoriteButton songId={data?.id}/>
          </div>
        </button>
        
        
      
    </div>
  );
};

export default SongCard;
