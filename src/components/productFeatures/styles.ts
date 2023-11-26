import styled from 'styled-components'

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3125rem;

  margin: 2rem 0;

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 1rem;
    font-weight: 400;

    .highlightedText {
      color: ${({ theme }) => theme.black};
      font-weight: 700;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 430px) {
    margin: 1.25rem 0;

    span {
      font-size: 0.75rem;
    }

    img {
      width: 12px;
      height: 8px;
    }
  }
`
