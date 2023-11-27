import React from 'react'
import { PurchaseContainer } from './styles'
import lockLogo from '../../assets/lock.svg'
import creditCardsLogo from '../../assets/credit-cards.svg'

export const PurchaseInfo: React.FC = () => {
  return (
    <PurchaseContainer>
      <div className="regular">
        <span>Free shipping</span>
        <div className="small-line" />
        <img className="lockImg" src={lockLogo} alt="" />
        <span>Secure 256-bit SSL encryption.</span>
        <div className="small-line" />
        <img src={creditCardsLogo} alt="" />
      </div>
      <div className="mobile">
        <div className="first-item">
          <span>Free shipping</span>
          <div className="small-line" />
          <img className="lockImg" src={lockLogo} alt="" />
          <span>Secure 256-bit SSL encryption.</span>
        </div>
        <div className="second-item">
          <div className="small-line-2" />
          <img src={creditCardsLogo} alt="" />
        </div>
      </div>
    </PurchaseContainer>
  )
}
