import React from 'react'
import mainLogo from './Logo/logonocopy.png'
import styled from 'styled-components'

const LogoImg = styled.img`
    height: 100%;
    margin-top: 5px;
    width: auto;
`;

const Logo = () => (
    <LogoImg src={mainLogo} alt="CoastCRM" />
)

export default Logo;