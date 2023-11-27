import styled from 'styled-components'

export const ProductContainer = styled.div`
  border-radius: 10px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.gray98};

  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  margin: 2.5rem 0 3.8125rem;

  @media (max-width: 430px) {
    gap: 1.5rem;
    padding: 0;
    flex-direction: column;
    margin: 1.5rem 0 0;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  @media (min-width: 430px) {
    .topText-mobile {
      display: none;
    }
  }

  @media (max-width: 430px) {
    .topText-mobile {
      color: ${({ theme }) => theme.black};
      font-size: 1.5rem;
      line-height: 2.1rem;
      text-align: center;

      .topHighlightedText {
        color: ${({ theme }) => theme.blue};
      }
    }
  }

  @media (max-width: 430px) {
    .product-image {
      width: 20rem;
      height: 20.5rem;
      align-self: center;
    }
  }
`

export const UserFeedbackContainer = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 1.5rem;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (max-width: 430px) {
    display: none;
  }
`

export const UserHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.125rem;
`

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: ${({ theme }) => theme.gray20};
    font-size: 0.875rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  .verifiedText {
    color: ${({ theme }) => theme.green2};
    font-size: 0.75rem;
    font-weight: 400;
  }
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .topText {
    color: ${({ theme }) => theme.black};
    font-size: 2rem;
    line-height: 2.8rem;

    @media (max-width: 430px) {
      display: none;
    }
  }

  .topHighlightedText {
    color: ${({ theme }) => theme.blue};
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin: 2.03125rem 0;

  .imageWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.blue};
    width: 8.375rem;
    height: 8.375rem;
    border-radius: 10px;
  }

  @media (max-width: 430px) {
    margin: 0;
    gap: 1rem;
    width: 100%;
    padding: 0 1.25rem;

    .imageWrapper {
      width: 5rem;
      height: 5rem;

      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`

export const ProductInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.9375rem;

  span {
    color: ${({ theme }) => theme.black};
    font-size: 1.25rem;
  }

  .priceText {
    color: ${({ theme }) => theme.gray59};
    font-size: 1rem;
    font-weight: 600;
  }

  .highlightedPriceText {
    color: ${({ theme }) => theme.blue};
    font-size: 1.375rem;
    font-weight: 600;
  }

  @media (max-width: 430px) {
    margin-bottom: 0.625rem;

    span {
      font-size: 0.875rem;
    }

    .priceText {
      font-size: 0.625rem;
    }

    .highlightedPriceText {
      font-size: 0.625rem;
    }
  }
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  .starsImage {
    width: 6.125rem;
    height: 1.125rem;
  }

  .productDescription {
    color: ${({ theme }) => theme.gray};
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: left;
  }

  .stockAmountWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    span {
      color: ${({ theme }) => theme.cyanBlueDarkShade};
      font-size: 1rem;
      font-weight: 300;
    }

    margin: 0.9375rem 0;
  }

  .stockIndicator {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.lightBlue};
  }

  .stockInnerIndicator {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;

    background: ${({ theme }) => theme.blue};
  }

  @media (max-width: 430px) {
    .productDescription {
      display: none;
    }

    .stockAmountWrapper {
      margin: 0.625rem 0;

      span {
        font-size: 0.75rem;
      }
    }
  }
`

export const ProductDescriptionMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 430px) {
    display: none;
  }

  @media (max-width: 430px) {
    align-self: center;

    span {
      color: ${({ theme }) => theme.gray};
      font-size: 0.75rem;
      line-height: 1rem;
      text-align: center;
    }
  }
`

export const PromotionContainer = styled.div`
  padding: 0.75rem 1rem;
  background: #edf3fd;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;

  img {
    margin-right: 1rem;
  }

  .logoWrapper {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.blue};

    padding: 6px;
  }

  span {
    color: ${({ theme }) => theme.black};
    font-size: 1rem;

    .highlightedText {
      color: ${({ theme }) => theme.blue};
    }
  }

  @media (max-width: 430px) {
    margin: 0 1.25rem 1.5rem;

    span {
      font-size: 0.875rem;
    }

    .logoWrapper {
      width: 1.5rem;
      height: 1.5rem;
      padding: 3.7px;
    }

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const DiscountButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1.25rem;

  span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.white};
    font-weight: 700;
  }

  border-radius: 50px;
  min-width: 100%;

  padding: 1rem;

  margin-bottom: 0.75rem;

  cursor: pointer;

  background: ${({ theme }) => theme.green3};

  @media (max-width: 430px) {
    gap: 1rem;

    padding: 1rem 3.5rem;

    margin: 0 1.25rem 0.75rem;
    min-width: 0;

    span {
      font-size: 0.875rem;
      white-space: nowrap;
    }

    img {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`

export const RefuseButton = styled.div`
  cursor: pointer;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: ${({ theme }) => theme.red};
    font-size: 1.125rem;
    font-weight: 500;
    /* text-decoration: underline; */
  }

  .underline {
    width: 16.8rem;
    height: 0.25px;
    border-bottom: 0.25px solid ${({ theme }) => theme.red};
  }

  @media (max-width: 430px) {
    margin-bottom: 1.5rem;
    span {
      font-size: 0.75rem;
    }

    .underline {
      width: 11.2rem;
    }
  }
`

export const GuaranteeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 1rem;
    line-height: 1.4rem;

    .highlightedText {
      color: ${({ theme }) => theme.gray};
      font-weight: 700;
    }
  }

  @media (max-width: 430px) {
    align-items: flex-start;
    margin: 0 1.25rem 3.125rem;

    span {
      font-size: 0.75rem;
    }

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`
