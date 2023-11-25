import React from 'react'
import { Header } from '../../components/header'
import { ContentWrapper, LogoContainer, OrderTextContainer } from './styles'
import clarifonLogo from '../../assets/clarifon-logo.svg'
import softwareLogo from '../../assets/software-logo.svg'
import { StepsGuide } from '../../components/stepsGuide'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <LogoContainer>
          <img src={clarifonLogo} alt="" />
          <img src={softwareLogo} alt="" />
        </LogoContainer>
        <OrderTextContainer>
          <span className="orderText">Wait ! your order in progress.</span>
          <span className="orderInfoText">
            Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
          </span>
        </OrderTextContainer>

        <StepsGuide />
      </ContentWrapper>
    </>
  )
}
