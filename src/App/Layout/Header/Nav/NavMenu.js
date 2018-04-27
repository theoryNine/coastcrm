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
                <NavItem text="Salesforce" link="#services" />
                <NavItem text="About Us" link="#about" />
                <NavItem text="Contact" link="#contact" />
            </Menu>
        );
    }
}

export default NavMenu;