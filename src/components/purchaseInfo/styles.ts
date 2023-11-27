import styled from 'styled-components'

export const PurchaseContainer = styled.div`
  .regular {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #cfcfcf;
    border-radius: 4px;
    padding: 0.5rem 1rem;

    margin-bottom: 1.25rem;

    @media (max-width: 430px) {
      display: none;
    }
  }

  span {
    color: ${({ theme }) => theme.gray};
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .small-line {
    border: 1px solid #cfcfcf;
    height: 1rem;
    width: 0.5px;
    margin: 0 1rem;
  }

  .lockImg {
    margin-right: 0.625rem;
  }

  .mobile {
    @media (min-width: 430px) {
      display: none;
    }

    margin: 0.75rem 0;

    margin-left: 8px;

    align-self: center;
    height: 4.4rem;

    @media (max-width: 430px) {
      display: flex;
      flex-direction: column;
      flex: 1;
      border: 1px solid #cfcfcf;
      border-radius: 4px;

      .lockImg {
        margin-right: 8px;
      }

      .first-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5rem 1rem;
      }

      .second-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0 1rem;
      }

      .small-line {
        margin: 0 0.75rem;
      }

      .small-line-2 {
        border-top: 1px solid #cfcfcf;
        height: 0.25px;
        width: 100%;
        margin-bottom: 0.75rem;
      }
    }
  }
`
