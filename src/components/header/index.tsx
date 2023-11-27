import React, { useState } from 'react'
import { HeaderContainer } from './styles'
import checkArrowLogo from '../../assets/check-arrow.svg'
import heartLogo from '../../assets/heart.svg'
import syncArrowLogo from '../../assets/sync-arrow.svg'
import truckLogo from '../../assets/truck.svg'
import arrowLeftLogo from '../../assets/arrow-left.svg'
import arrowRightLogo from '../../assets/arrow-right.svg'

export const Header: React.FC = () => {
  const [index, setIndex] = useState(0)

  const maxValue = 3

  const array = [
    {
      text: '30-DAY SATISFACTION GUARANTEE',
      logo: checkArrowLogo,
    },
    {
      text: 'Free delivery on orders over $40.00',
      logo: truckLogo,
    },
    {
      text: '50.000+ HAPPY CUSTOMERS',
      logo: heartLogo,
    },
    {
      text: '100% Money Back Guarantee',
      logo: syncArrowLogo,
    },
  ]

  const onIndexIncrease = () => {
    setIndex((prev) => {
      if (prev === maxValue) {
        return prev
      }
      return prev + 1
    })
  }

  const onIndexDecrease = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return prev
      }
      return prev - 1
    })
  }

  return (
    <HeaderContainer>
      <img
        className="hidable-arrow"
        src={arrowLeftLogo}
        alt=""
        onClick={onIndexDecrease}
      />
      <div className="mobile-div">
        <img src={array[index].logo} alt="" />
        <span>{array[index].text}</span>
      </div>
      <img
        className="hidable-arrow"
        src={arrowRightLogo}
        alt=""
        onClick={onIndexIncrease}
      />

      <div className="hidable-item">
        <img src={checkArrowLogo} alt="" />
        <span>30-DAY SATISFACTION GUARANTEE</span>
      </div>

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
