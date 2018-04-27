import React from 'react'
import styled from 'styled-components'

const DividerLine = styled.span`
    height: 1px;
    background: ${props => props.theme.coastPrimary};
    background: linear-gradient(90deg, ${props => props.theme.coastPrimary} 0%, ${props => props.theme.coastPrimary} 55%, rgba(255,255,255,1) 100%);
    display: block;
    margin-bottom: 24px;
    margin-left: -24px;
    margin-right: auto;
    width: 85%;

    @media (min-width: 768px) {
        width: 75%
    }
`;

class Divider extends React.Component {
    render() {
        return(
            <DividerLine className="divider-line"></DividerLine>
        );
    }
}

export default Divider;