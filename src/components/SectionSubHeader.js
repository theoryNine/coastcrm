import React from 'react'
import styled from 'styled-components'

const SubHeadText = styled.h2`
    font-size: 1.2rem;
    letter-spacing: 5px;
    margin-bottom: 1.4rem;
    text-transform: capitalize;
`;

class SectionSubHeader extends React.Component {
    render() {
        return (
            <SubHeadText className="has-text-centered"><em>{this.props.text}</em></SubHeadText>
        );
    }
}

export default SectionSubHeader;