import React from 'react'
import { Card } from '../components/Card';
import { Paytm, hink } from '../components/Details';

export const Projects = () => {
  return (

      <section id="projects" className='mt-24'>
      <div>
      <center>
        <h2 className='textUnderline text-5xl mb-20'>My Projects</h2>
      </center>
      <div className='flex flex-wrap mx-40 cardDiv'>
        <Card onClick={() => window.open("https://github.com/rrajofficial7/Paytm-Clone", "_blank")} src={"https://api.iconify.design/logos:paypal.svg"} lang={"Paypal-clone"} desc={Paytm} type={"Let's Go"} />
        <Card src={"https://api.iconify.design/logos:blogger.svg"} lang={"Hink"} desc={hink} type={"Let's Go"}/>
        <Card src={"https://api.iconify.design/twemoji:man-cook.svg"} lang={"Cookin'"} desc={"More Cookin'. I'm working on new project after making I'll mention here"} type={"Let me cook"}/>

        </div>
      </div>
    </section>

  )
}
