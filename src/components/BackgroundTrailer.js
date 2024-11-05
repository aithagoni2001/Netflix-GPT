import React from 'react'
import useBackgroundTrailer from "../hooks/useBackgroundTrailer"
import { useSelector } from 'react-redux';

const BackgroundTrailer = ({movieid}) => {
  const TrailerVideo = useSelector((store) => store.movies?.backgroundTrailer);

  useBackgroundTrailer(movieid)
  return (
    <div className='w-full'>
      <iframe
        src={"https://www.youtube.com/embed/D6mC2rXALOE?si=gCBw8-HmNZkO-wcr"+TrailerVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackgroundTrailer