import React from 'react'

const TournamentCard = (props) => {
  return (
    <div className="flex flex-col w-full bg-zinc-900 backdrop-blur-40 rounded-lg    h-full overflow-hidden">
    <div
      className=
        " w-full h-[300px] mobile:h-[200px] rounded-t-xl " 
    ><img className="object-top" src={props.image} alt={props.alt}/></div>
    <div className="flex  flex-col w-full h-full gap-1 text-gray-300 pb-2 tablet:h-full  ">
      <h2 className="text-4xl   pt-2 pb-5 text-center big-screen:text-4xl laptop:text-3xl tablet:text-2xl tablet:py-1 ">
        {props.title}
      </h2>
      <div className="flex flex-col justify-between items-center text-left px-1 big-screen:text-2xl laptop:text-xl tablet:text-lg tablet:pb-1   mobile:text-base">
        <p>{props.text}</p>
        <div className="py-5">
        <button className="font-bold text-xl py-2 px-5 bg-red-700 hover:opacity-80 rounded-xl tablet:text-sm ">
            Bli med
          </button>
          </div>
      </div>
      
    </div>
  </div>
  )
}

export default TournamentCard
