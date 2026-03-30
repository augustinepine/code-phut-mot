const ThreeDots = () => {
  return (
    <div className='flex space-x-2'>
      <div className='w-4 h-4 rounded-full 
            bg-[linear-gradient(90deg,_#7f7f7f,_#ffffff)]
            animate-[bounce_800ms_infinite_alternate]
       '></div>
      <div className='w-4 h-4 rounded-full
            bg-[linear-gradient(90deg,_#7f7f7f,_#ffffff)]
            animate-[bounce_800ms_200ms_infinite_alternate]
       '></div>
      <div className='w-4 h-4 rounded-full
            bg-[linear-gradient(90deg,_#7f7f7f,_#ffffff)]
            animate-[bounce_800ms_400ms_infinite_alternate]
       '></div>
    </div>
  )
}

export default ThreeDots