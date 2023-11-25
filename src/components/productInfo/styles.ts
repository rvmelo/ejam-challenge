import styled from 'styled-components'

export const ProductContainer = styled.div`
  border-radius: 10px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.gray98};

  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  margin: 2.5rem 0 3.8125rem;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`

export const UserFeedbackContainer = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 1.5rem;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 1rem;
    line-height: 1.5rem;
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
  .topText {
    color: ${({ theme }) => theme.black};
    font-size: 2rem;
    line-height: 2.8rem;
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

    color: ${({ theme }) => theme.cyanBlueDarkShade};
    font-size: 1rem;
    font-weight: 300;

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
`
