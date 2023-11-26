import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 3.125rem;
  background: ${({ theme }) => theme.cyanBlue};

  span {
    color: ${({ theme }) => theme.white};
    font-size: 0.75rem;
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }

  @media (max-width: 430px) {
    justify-content: center;

    .hidable-item {
      display: none;
    }

    .changeable-div {
      margin: 0 1.65625rem;
    }
  }

  @media (min-width: 430px) {
    .hidable-arrow {
      display: none;
    }
  }

  .hidable-arrow {
    cursor: pointer;
  }
`
