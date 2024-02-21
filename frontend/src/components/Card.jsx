import React from 'react'

export const Card = ({ lang, desc, src, type, onClick }) => {
  return (
    <div className='m-6'><button onClick={onClick} className="cursor-pointer aspect-[1] lg:w-[350px] card  bg-slate-900  border border-violet-400 rounded-3xl " >
      <div className="content flex gap-3 p-1 items-center text-center justify-center flex-col max-w-[20rem]">
        <div className=" bg-[#3d3a45] p-5 flex rounded-xl border border-outline border-violet-400 justify-center items-center aspect-[1]">
          <img src={src} alt="Python" className="w-20 h-10 image" />
        </div>
        <div className="">
          <h1 className="gradText pl-2 text-2xl font-semibold">{lang}</h1>
          <p className="pl-2 mt-1 text-sm opacity-[0.8]">{desc}</p>
          <div className="flex justify-center items-center flex-wrap gap-1">
            <div className="gradientText rounded-xl border border-indigo-700 font-semibold text-sx px-2 py-1 mt-4">{type}
            </div>
          </div>
        </div>
      </div>
    </button></div>
  )
}
