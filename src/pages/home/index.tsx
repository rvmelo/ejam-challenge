import React from 'react'
import { Header } from '../../components/header'
import { ContentWrapper, LogoContainer, OrderTextContainer } from './styles'
import clarifionLogo from '../../assets/clarifon-logo.svg'
import softwareLogo from '../../assets/software-logo.svg'
import { StepsGuide } from '../../components/stepsGuide'
import { ProductInfo } from '../../components/productInfo'
import { Baseboard } from '../../components/baseboard'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <LogoContainer>
          <img className="clarifion-logo" src={clarifionLogo} alt="" />
          <img className="software-logo" src={softwareLogo} alt="" />
        </LogoContainer>
        <OrderTextContainer>
          <span className="orderText">Wait ! your order in progress.</span>
          <span className="orderInfoText">
            Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
          </span>
        </OrderTextContainer>

        <StepsGuide />
        <ProductInfo />
      </ContentWrapper>
      <Baseboard />
    </>
  )
}
