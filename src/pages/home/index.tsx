import React from 'react'
import { Header } from '../../components/header'
import { LogoContainer } from './styles'
import clarifonLogo from '../../assets/clarifon-logo.svg'
import softwareLogo from '../../assets/software-logo.svg'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <LogoContainer>
        <img src={clarifonLogo} alt="" />
        <img src={softwareLogo} alt="" />
      </LogoContainer>
    </>
  )
}
