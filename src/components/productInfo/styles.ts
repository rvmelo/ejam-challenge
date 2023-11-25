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

export const RightWrapper = styled.div``
