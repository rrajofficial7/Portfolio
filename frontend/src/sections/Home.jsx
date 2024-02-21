import React from 'react'
import char from "../assets/anime.jpg"


export const Home = () => {
  return (
    <section id="home">
      <center>
        <p className='text-6xl mt-24 heading font-bold'>
          Hello, This is <span className='gradText mb-2'>Ronit Raj</span>,
          <br />
          a <span className='gradText'>Full-Stack Developer </span>
        </p>
        <p className='text-xl mt-2 subHeading'>
          My proficiency includes <span className='gradText'>Javascript</span>,
          <span className='gradText'> Typescript</span>, &
          <span className='gradText'> Python</span>
        </p>
        <img className='mt-6 rounded-full w-72 h-72 border-4 border-violet-400' src={char}/>
      </center>
    </section>
  )
}
