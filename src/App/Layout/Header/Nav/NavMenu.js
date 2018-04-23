import React from 'react'
import styled from 'styled-components'
import NavItem from './NavMenu/NavItem.js'

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-end;
`

class NavMenu extends React.Component {
    render() {
        return(
            <Menu>
                <NavItem text="Text1" link="https://www.google.com" />
                <NavItem text="Text2" link="" />
                <NavItem text="Text3" link="" />
                <NavItem text="text4" link="" />
            </Menu>
        );
    }
}

export default NavMenu;