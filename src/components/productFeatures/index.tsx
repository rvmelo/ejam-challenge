import React from 'react'
import { FeaturesContainer } from './styles'
import blueTickArrowLogo from '../../assets/blue-tick-circle.svg'

export const ProductFeatures: React.FC = () => {
  return (
    <FeaturesContainer>
      <div>
        <img src={blueTickArrowLogo} alt="" />
        <span>
          Negative Ion Technology may{' '}
          <span className="highlightedText">help with allergens</span>
        </span>
      </div>
      <div>
        <img src={blueTickArrowLogo} alt="" />
        <span>
          Designed for <span className="highlightedText">air rejuvenation</span>
        </span>
      </div>
      <div>
        <img src={blueTickArrowLogo} alt="" />
        <span>
          <span className="highlightedText">Perfect for every room</span> in all
          types of places.
        </span>
      </div>
    </FeaturesContainer>
  )
}
