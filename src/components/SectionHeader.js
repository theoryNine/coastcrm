import React from 'react'
import styled from 'styled-components'

const HeaderText = styled.h1`
    letter-spacing: 5px;
    text-transform: uppercase;
`;

class SectionHeader extends React.Component {
    render() {
        return (
            <HeaderText className="title has-text-centered">{this.props.text}</HeaderText>
        );
    }
}

export default SectionHeader;