import Head from 'next/head'
import Image from 'next/image'
import *  as S from '../components/index.styled'
import NavBar from '../components/common/NavBar/NavBar'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'



export default function Home() {
  return (
    <>
      <S.indexContainer>
        <NavBar/>
        <Landing/>
        <About/>
      </S.indexContainer>
    </>
  )
}
