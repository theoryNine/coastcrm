import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/Logo.js'
import NavMenu from './Nav/NavMenu.js'

const Background = styled.div`
    align-items: center;
    background-color: ${props => props.theme.coastSecondary};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.55);
    color: ${props => props.theme.coastPrimary};
    display: flex;
    height: 70px;
    opacity: .85;
    width: 100%;

    @media (min-width: 768px) {
        height: 100px;
    }
`

const InnerBg = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;

    @media (min-width:768px) {
        justify-content: space-between;
    }
`

class Nav extends React.Component {
    render() {
        return(
            <nav className="nav" aria-label="Main navigation">
                <Background>
                    <InnerBg className="container">
                        <Logo />
                        <NavMenu />
                    </InnerBg>
                </Background>
            </nav>
        )
    }
}

export default Nav;