import React from 'react'
import styled from 'styled-components'

const Item = styled.a`
    text-transform: uppercase;
    padding: 0 15px;
`
class NavItem extends React.Component {
    render() {
        return(
            <Item href={this.props.link}>{this.props.text}</Item>
        );
    }
}

export default NavItem;