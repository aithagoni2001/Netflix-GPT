import React from 'react';
import useBackgroundTrailer from "../hooks/useBackgroundTrailer";
import { useSelector } from 'react-redux';

const BackgroundTrailer = ({ movieid }) => {
  const TrailerVideo = useSelector((store) => store.movies?.backgroundTrailer);
  useBackgroundTrailer(movieid);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <iframe
        className="w-full h-full"
       src = {"https://www.youtube.com/embed/D6mC2rXALOE?si=gCBw8-HmNZkO-wcr"+TrailerVideo?.key +"?&autoplay=1&mute=1"}       
       title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackgroundTrailer;
