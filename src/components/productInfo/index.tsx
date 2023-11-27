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
  PromotionContainer,
  DiscountButton,
  RefuseButton,
  GuaranteeContainer,
  ProductDescriptionMobile,
} from './styles'

import productImage from '../../assets/product-image.svg'
import productSmallImage from '../../assets/product-small-image.svg'
import userPhoto from '../../assets/user-photo.svg'
import starsImage from '../../assets/stars.svg'
import verifiedLogo from '../../assets/verified-icon.svg'
import stars2Image from '../../assets/stars2.svg'
import percentLogo from '../../assets/percent.svg'
import rightArrowLogo from '../../assets/right-arrow.svg'
import guaranteeLogo from '../../assets/guarantee-logo.svg'
import { ProductFeatures } from '../productFeatures'
import { PurchaseInfo } from '../purchaseInfo'

export const ProductInfo: React.FC = () => {
  return (
    <ProductContainer>
      <LeftWrapper>
        <span className="topText-mobile">
          <span className="topHighlightedText">ONE TIME ONLY</span> special
          price for 6 extra Clarifion for only{' '}
          <span className="topHighlightedText">$14 each</span> ($84.00 total!)
        </span>

        <img className="product-image" src={productImage} alt="" />

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

        <ProductDescriptionMobile>
          <span>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </span>
        </ProductDescriptionMobile>

        <ProductFeatures />
        <PromotionContainer>
          <div className="logoWrapper">
            <img src={percentLogo} alt="" />
          </div>
          <span>
            Save <span className="highlightedText">53%</span> and get{' '}
            <span className="highlightedText">6 extra Clarifision</span> for
            only <span className="highlightedText">$14 Each</span>.
          </span>
        </PromotionContainer>
        <DiscountButton>
          <span>Yes - Claim my discount</span>
          <img src={rightArrowLogo} alt="" />
        </DiscountButton>
        <PurchaseInfo />
        <RefuseButton>
          <div>
            <span>NO THANKS, I DON&apos;T WANT THIS.</span>
            <div className="underline" />
          </div>
        </RefuseButton>
        <GuaranteeContainer>
          <img src={guaranteeLogo} alt="" />
          <span>
            If you are not completely thrilled with your Clarifion - We have a{' '}
            <span className="highlightedText">
              30 day satisfaction guarantee.{' '}
            </span>
            Please refer to our return policy at the bottom of the page for more
            details. Happy Shopping!
          </span>
        </GuaranteeContainer>
      </RightWrapper>
    </ProductContainer>
  )
}
