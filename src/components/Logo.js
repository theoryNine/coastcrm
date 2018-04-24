import React from 'react'
import mainLogo from './Logo/logonocopy.png'
import styled from 'styled-components'

const LogoImg = styled.img`
    display: none;
    height: 100%;
    width: auto;

    @media (min-width: 768px) {
        display: inline-block;
    }
`;

const Logo = () => (
    <LogoImg src={mainLogo} alt="CoastCRM Logo" />
)

export default Logo;