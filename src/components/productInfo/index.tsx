import React from 'react'
import {
  LeftWrapper,
  ProductContainer,
  RightWrapper,
  UserFeedbackContainer,
  UserHeaderContainer,
  UserInfoContainer,
  ProductInfoWrapper,
  ProductInfoContainer,
  ProductInfoHeader,
} from './styles'

import productImage from '../../assets/product-image.svg'
import productSmallImage from '../../assets/product-small-image.svg'
import userPhoto from '../../assets/user-photo.svg'
import starsImage from '../../assets/stars.svg'
import verifiedLogo from '../../assets/verified-icon.svg'
import stars2Image from '../../assets/stars2.svg'

export const ProductInfo: React.FC = () => {
  return (
    <ProductContainer>
      <LeftWrapper>
        <img src={productImage} alt="" />
        <UserFeedbackContainer>
          <UserHeaderContainer>
            <img src={userPhoto} alt="" />
            <UserInfoContainer>
              <img src={starsImage} alt="" />
              <span>
                Ken T. <img src={verifiedLogo} alt="" />{' '}
                <span className="verifiedText">Verified Customer</span>
              </span>
            </UserInfoContainer>
          </UserHeaderContainer>
          <span>
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </span>
        </UserFeedbackContainer>
      </LeftWrapper>
      <RightWrapper>
        <span className="topText">
          <span className="topHighlightedText">ONE TIME ONLY</span> special
          price for 6 extra Clarifion for only{' '}
          <span className="topHighlightedText">$14 each</span> ($84.00 total!)
        </span>
        <ProductInfoContainer>
          <div className="imageWrapper">
            <img src={productSmallImage} alt="" />
          </div>
          <ProductInfoWrapper>
            <ProductInfoHeader>
              <span>Clarifion Air Ionizer</span>
              <div>
                <span className="priceText">$180</span>
                <span className="highlightedPriceText"> $84</span>
              </div>
            </ProductInfoHeader>
            <img className="starsImage" src={stars2Image} alt="" />
            <div className="stockAmountWrapper">
              <div className="stockIndicator">
                <div className="stockInnerIndicator"></div>
              </div>
              <span>12 left in Stock</span>
            </div>
            <span className="productDescription">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </span>
          </ProductInfoWrapper>
        </ProductInfoContainer>
      </RightWrapper>
    </ProductContainer>
  )
}
