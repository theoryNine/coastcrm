import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/Logo.js'

const Background = styled.div`
    background-color: ${props => props.theme.coastSecondary};
    color: ${props => props.theme.coastSecondary};
    display: flex;
    height: 100px;
    width: 100%;
`;

const Nav = () => (
    <div>
        <Background>
            <Logo />
            <p>Text</p>
        </Background>
    </div>
  )

export default Nav;