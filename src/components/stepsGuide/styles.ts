import styled, { css } from 'styled-components'

export const GuideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const colors = {
  blue: 'blue',
  green: 'green',
  white: 'white',
} as const

interface GuideItemProps {
  color: keyof typeof colors
  textColor?: keyof typeof colors
  hasBorder?: boolean
}

export const GuideItem = styled.div<GuideItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  .stepIndicator {
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: ${({ theme, color }) => theme[color]};

    margin-right: 1.25rem;

    align-items: center;
    justify-content: center;

    span {
      font-size: 1.25;
      color: ${({ theme, textColor = 'white' }) => theme[textColor]};
    }

    ${({ hasBorder = false }) =>
      hasBorder &&
      css`
        border: 2px solid ${({ theme }) => theme.blue};
      `}
  }

  span {
    color: ${({ theme }) => theme.black};
    font-size: 1.25rem;
  }
`
