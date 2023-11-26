import React from 'react'
import { HeaderContainer } from './styles'
import checkArrowLogo from '../../assets/check-arrow.svg'
import heartLogo from '../../assets/heart.svg'
import syncArrowLogo from '../../assets/sync-arrow.svg'
import truckLogo from '../../assets/truck.svg'
import arrowLeftLogo from '../../assets/arrow-left.svg'
import arrowRightLogo from '../../assets/arrow-right.svg'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img className="hidable-arrow" src={arrowLeftLogo} alt="" />
      <div className="changeable-div">
        <img src={checkArrowLogo} alt="" />
        <span>30-DAY SATISFACTION GUARANTEE</span>
      </div>
      <img className="hidable-arrow" src={arrowRightLogo} alt="" />

      <div className="hidable-item">
        <img src={truckLogo} alt="" />
        <span>Free delivery on orders over $40.00</span>
      </div>
      <div className="hidable-item">
        <img src={heartLogo} alt="" />
        <span>50.000+ HAPPY CUSTOMERS</span>
      </div>
      <div className="hidable-item">
        <img src={syncArrowLogo} alt="" />
        <span>100% Money Back Guarantee</span>
      </div>
    </HeaderContainer>
  )
}
