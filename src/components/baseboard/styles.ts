import styled from 'styled-components'

export const BaseboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.cyanBlue};
  padding: 1.5rem 7.4375rem 1.5rem 7.75rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    white-space: nowrap;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .line {
    height: 1.5rem;
    border: 0.5px solid ${({ theme }) => theme.white};
    width: 1px;
    margin: 0 1rem;
  }

  img {
    margin-right: 1rem;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 0.75rem;
    }
  }
`
