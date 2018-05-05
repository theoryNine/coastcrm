import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.h1`
    letter-spacing: 5px;
    text-transform: capitalize;
`;

class AltSectionHeader extends React.Component {
    render() {
        return (
            <HeaderText className="title has-text-centered">{this.props.text}</HeaderText>
        );
    }
}

export default AltSectionHeader;