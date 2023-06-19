"use client"

import React from 'react'
import { LinkContainer } from './style'
type Props = {
  name:string,
  link:string
}
export default function index({name,link}:Props) {
  return (
    <LinkContainer>
      <a href={link} target='_blank'>
        {name}
      </a>
    </LinkContainer>
    
  )
}
