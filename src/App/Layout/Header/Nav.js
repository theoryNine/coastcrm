import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/Logo.js'
import NavMenu from './Nav/NavMenu.js'

const Background = styled.div`
    align-items: center;
    background-color: ${props => props.theme.coastSecondary};
    border-bottom: 1px solid ${props => props.theme.coastPrimary};
    color: ${props => props.theme.coastPrimary};
    display: flex;
    height: 70px;
    opacity: 1;
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

const LogoContainer = styled.div`
    display: none;
    height: 100%;

    @media (min-width: 768px) {
        display: inline-block;
    }

    & img {
        height: 96%;
    }
`

class Nav extends React.Component {
    render() {
        return(
            <nav className="nav" aria-label="Main navigation">
                <Background>
                    <InnerBg className="container">
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
                        <NavMenu />
                    </InnerBg>
                </Background>
            </nav>
        )
    }
}

export default Nav;