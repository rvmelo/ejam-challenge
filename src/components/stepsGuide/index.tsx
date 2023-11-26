import React from 'react'
import { GuideContainer, GuideItem } from './styles'
import tickArrowLogo from '../../assets/tick-arrow.svg'

export const StepsGuide: React.FC = () => {
  return (
    <GuideContainer>
      <GuideItem color="green">
        <div className="stepIndicator">
          <img src={tickArrowLogo} alt="" />
        </div>
        <span className="regular-text">Step 1 : Cart Review</span>
        <span className="small-text">Cart Review</span>
      </GuideItem>
      <GuideItem color="green">
        <div className="stepIndicator">
          <img src={tickArrowLogo} alt="" />
        </div>
        <span className="regular-text">Step 2 : Checkout</span>
        <span className="small-text">Checkout</span>
      </GuideItem>
      <GuideItem color="blue">
        <div className="stepIndicator">
          <span>3</span>
        </div>
        <span className="regular-text">Step 3 : Special Offer</span>
        <span className="small-text">Special Offer</span>
      </GuideItem>
      <GuideItem color="white" textColor="blue" hasBorder>
        <div className="stepIndicator">
          <span>4</span>
        </div>
        <span className="regular-text">Step 4 : Confirmation</span>
        <span className="small-text">Confirmation</span>
      </GuideItem>
    </GuideContainer>
  )
}
