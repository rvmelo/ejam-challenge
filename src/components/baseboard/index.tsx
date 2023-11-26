import React from 'react'
import { BaseboardContainer } from './styles'
import lockLogo from '../../assets/white-lock.svg'

export const Baseboard: React.FC = () => {
  return (
    <BaseboardContainer>
      <span>
        Copyright (c) 2023 <div className="line" />{' '}
        Clarifionsupport@clarifion.com
      </span>
      <div>
        <img src={lockLogo} alt="" />
        <span>Secure 256-bit SSL encryption.</span>
      </div>
    </BaseboardContainer>
  )
}
