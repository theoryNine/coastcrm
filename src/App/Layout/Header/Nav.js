import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/Logo.js'

const Background = styled.div`
    align-items: center;
    background-color: ${props => props.theme.coastSecondary};
    color: ${props => props.theme.coastPrimary};
    display: flex;
    height: 100px;
    width: 100%;
`

const InnerBg = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
`

const Nav = () => (
    <nav className="nav" aria-label="Main navigation">
        <Background>
            <InnerBg div className="container">
                <Logo />
                <span>Text</span>
            </InnerBg>
        </Background>
    </nav>
  )

export default Nav;