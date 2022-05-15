import React from 'react'
import Gallery from './components/gallery/Gallery'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import {useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('')
  return (
    <>
        <Menu input={input} setInput={setInput}/>
        <Header />
        <Gallery toSearch={input} />
    </>
  )
}
