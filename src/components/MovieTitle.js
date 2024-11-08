import React from 'react';

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
      <div className="px-10">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="w-1/3 max-h-24 overflow-clip my-4">{overview}</p>
        <div>
          <button className="bg-gray-100 text-black text-lg px-10 py-1 rounded-lg mr-2">▶️ Play</button>
          <button className="bg-gray-500 text-black text-lg py-1 px-6 rounded-lg opacity-75">🔽 More Info</button>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
