import React from 'react';

const MovieTitle = ({title, overview}) => {

  return (
    <div className='mt-32 px-20'>
      <h1 className='px-10 text-5xl font-bold'>{title}</h1>
      <p className='w-1/3 max-h-24 overflow-clip my-4 px-10'>{overview}</p>
      <div className='px-10'>
        <button className='bg-gray-100 text-black text-lg px-10 py-1 rounded-lg mr-2'>▶️Play</button>
        <button className='bg-gray-500 text-black text-lg py-1 px-6 rounded-lg opacity-75'>🔽Moreinfo</button>
      </div>
    </div>
    
  )
}

export default MovieTitle;