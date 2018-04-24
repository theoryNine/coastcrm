import React from 'react'
import mainLogo from './Logo/logo.png'
import styled from 'styled-components'

const LogoImg = styled.img`
    width: 100px;
    display: none;

    @media (min-width: 768px) {
        display: inline-block;
    }
`;

const Logo = () => (
    <LogoImg src={mainLogo} alt="CoastCRM Logo" />
)

export default Logo;