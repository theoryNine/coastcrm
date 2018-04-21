import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background-color: ${props => props.theme.coastblue};
    color: white;
    height: 100px;
    width: 100%;
`;

const Nav = () => (
    <Background><button className="button is-dark">Test</button></Background>
  )

export default Nav;