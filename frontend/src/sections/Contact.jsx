import React from 'react'
import { ContactCard } from '../components/ContactCard'

export const Contact = () => {
  return (
    <section id='contact' className='mt-24'>
      <center>
        <h2 className='textUnderline text-5xl mb-20'>Contact Me</h2>
      </center>
      <div className='flex flex-wrap mx-40 cardDiv contactCard'>
        <ContactCard src="https://api.iconify.design/material-symbols:mail-outline.svg" name={"Email"} onClick={() =>{
          window.open("mailto:ronitrajofficial7@gmail.com","_blank")
        }}/>
        <ContactCard src="https://api.iconify.design/logos:twitter.svg" name={"Twitter"} onClick={() => {
          window.open("https://twitter.com/rrajofficial7", "_blank")
        }}/>
        <ContactCard src="https://api.iconify.design/icon-park:github-one.svg" name={"Github"}  onClick={() => {
          window.open("https://github.com/rrajofficial7", "_blank")
        }}/>
        <ContactCard src="https://api.iconify.design/logos:discord-icon.svg" name={"Discord"} onClick={() => {
          window.open("https://discord.com/users/1198477362199805964", "_blank")
        }}/>

      </div>
    </section>
  )
}
