import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1.875rem 0;

  @media (max-width: 430px) {
    .clarifion-logo {
      width: 106.67px;
      height: 20px;
    }

    .software-logo {
      width: 101px;
      height: 16px;
    }
  }
`

export const ContentWrapper = styled.div`
  padding: 0 7.9375rem;

  @media (max-width: 430px) {
    padding: 0 1.25rem;
  }
`

export const OrderTextContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;

  margin-bottom: 3.75rem;

  .orderText {
    color: ${({ theme }) => theme.black};
    font-size: 3rem;
    text-align: center;
  }

  .orderInfoText {
    color: ${({ theme }) => theme.gray};
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 430px) {
    .orderText {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    .orderInfoText {
      font-size: 1rem;
    }
  }
`
