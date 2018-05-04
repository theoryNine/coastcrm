import React from 'react'
import styled from 'styled-components'

const TaglineComponent = styled.div`
    display: none;

    @media (min-width: 768px) {
        background: linear-gradient(90deg,${props => props.theme.coastPrimary} 0%,${props => props.theme.coastPrimary} 75%,rgba(255,255,255,0) 100%);
        display: block;
        opacity: .9;
        padding: 1rem;
    }

    @media (min-width: 1080px) {
        background: linear-gradient(90deg, ${props => props.theme.coastPrimary} 0%, ${props => props.theme.coastPrimary} 55%, rgba(255,255,255,0) 70%);
    }

    @media (min-width: 1400px) {
        background: linear-gradient(90deg, ${props => props.theme.coastPrimary} 0%, ${props => props.theme.coastPrimary} 40%, rgba(255,255,255,0) 60%);
    }

    @media (min-width: 1900px) {
        background: linear-gradient(90deg, ${props => props.theme.coastPrimary} 0%, ${props => props.theme.coastPrimary} 35%, rgba(255,255,255,0) 60%);
    }
`;

const TaglineText = styled.h1`
    color: ${props => props.theme.coastSecondary};
    font-size: 1.7rem;
    letter-spacing: 4px;
    font-weight: 700;
`;

class Tagline extends React.Component {
    render() {
        return(
            <TaglineComponent className="hero-tagline-component">
                <div className="inner-tagline-container container">
                    <TaglineText>{this.props.text}</TaglineText>
                </div>
            </TaglineComponent>
        );
    }
}

export default Tagline;