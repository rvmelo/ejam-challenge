import React from 'react'
import {
  LeftWrapper,
  ProductContainer,
  RightWrapper,
  UserFeedbackContainer,
  UserHeaderContainer,
  UserInfoContainer,
} from './styles'

import productImage from '../../assets/product-image.svg'
import userPhoto from '../../assets/user-photo.svg'
import starsImage from '../../assets/stars.svg'
import verifiedLogo from '../../assets/verified-icon.svg'

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
        <span>right wrapper</span>
      </RightWrapper>
    </ProductContainer>
  )
}
