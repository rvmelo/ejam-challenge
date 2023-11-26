import styled from 'styled-components'

export const PurchaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  padding: 0.5rem 1rem;

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
`
