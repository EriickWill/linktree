"use client"

import Image from 'next/image'
import { Main } from './style'
import LinkComp from './components/LinkComp'


export default function Home() {
  return (
   <Main className='container'>
      <Image src={"/profile.png"} width={200} height={200} alt='Imagem de perfil' className='img'/>
      <h1>Erick Willian</h1>

      <section>
          <LinkComp name="GitHub" link="https://github.com/EriickWill"/ >
          <LinkComp name="LinkedIn" link="https://www.linkedin.com/in/erickwillian-dev/"/ >
          <LinkComp name="Instagram Pessoal" link="https://www.instagram.com/erick.williian/"/ >
          <LinkComp name="Instagram Dev" link="https://www.instagram.com/erickw.dev/"/ >
      </section>
   </Main>
  )
}
