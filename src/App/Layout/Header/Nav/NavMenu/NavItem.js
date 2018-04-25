import React from 'react'
import styled from 'styled-components'

const Item = styled.a`
    align-items: center;
    color: ${props => props.theme.coastPrimary};
    transition: .3s ease all;
    display: flex;
    font-size: 1.1rem;
    font-weight: 700;
    height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0 8px;

    &:hover {
        background-color: rgb(38,47,77);
        color: ${props => props.theme.coastOrange};
    }

    @media (min-width:768px) {
        letter-spacing: 3px;
        padding: 0 20px;
    }

    @media (min-width: 1088px) {
        padding: 0 30px;
    }

    @media (min-width: 1280px) {
        font-size: 1.2rem;
    }
`
class NavItem extends React.Component {
    render() {
        return(
            <Item href={this.props.link}>{this.props.text}</Item>
        );
    }
}

export default NavItem;