import React from 'react'
import { Card } from '../components/Card'
import { js,react, Next, nodejs, expressjs , prismaJs, gitjs ,PostgreSQL, mongodb, python} from '../components/Details'

export const Skills = () => {
  return (
    <section id="skills" className='mt-24'>
      <div>
      <center>
        <h2 className='textUnderline text-5xl mb-20'>My Skills</h2>
      </center>
      <div className='flex flex-wrap mx-40 cardDiv'>
        <Card className="cards" src={"https://api.iconify.design/logos:javascript.svg"} lang={"Javascript"} desc={js} onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")} type={"Language"}/>
        <Card src={"https://api.iconify.design/vscode-icons:file-type-python.svg"} lang={"Python"} desc={python} onClick={() => window.open("https://www.python.org/", "_blank")} type={"Language"}/>

        <Card src={"https://api.iconify.design/vscode-icons:file-type-reactjs.svg"} lang={"react"} desc={react} type={"Library"}  onClick={() => window.open("https://react.dev/", "_blank")}/>
        <Card src={"https://api.iconify.design/logos:nextjs-icon.svg"} lang={"Next js"} desc={Next} type={"Framework"} onClick={() => window.open("https://nextjs.org", "_blank")}/>
        <Card src={"https://api.iconify.design/logos:nodejs-icon.svg"} lang={"Node js"} desc={nodejs} type={"Runtime Enviroment"} onClick={() => window.open("https://nodejs.org/en", "_blank")}/>
        <Card src={"https://api.iconify.design/skill-icons:expressjs-light.svg"} lang={"Express js"} desc={expressjs} type={"Framework"} onClick={() => window.open("https://expressjs.com", "_blank")}/>
        <Card src={"https://api.iconify.design/tabler:brand-prisma.svg"} lang={"Prisma"} desc={prismaJs} type={"Database"} onClick={() => window.open("https://www.prisma.io/", "_blank")}/>
        <Card src={"https://api.iconify.design/logos:postgresql.svg"} lang={"PostgreSQL"} desc={PostgreSQL} type={"Database"} onClick={() => window.open("https://www.postgresql.org/", "_blank")}/>
        <Card src={"https://api.iconify.design/devicon:mongodb-wordmark.svg"} lang={"MongoDB"} desc={mongodb} type={"Database"} onClick={() => window.open("https://www.mongodb.com/", "_blank")}/>

        <Card src={"https://api.iconify.design/ph:git-merge-fill.svg"} lang={"Git"} desc={gitjs} type={"Version Control"} onClick={() => window.open("https://git-scm.com/", "_blank")}/>


        </div>
      </div>
    </section>
  )
}
