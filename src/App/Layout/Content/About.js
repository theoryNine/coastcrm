import React from 'react'
import styled from 'styled-components'
import AltSectionHeader from '../../../components/AltSectionHeader.js'

const AboutSection = styled.section`
    background-color: ${props => props.theme.coastPrimary};
    color: ${props => props.theme.coastSecondary};
`;

const Divider = styled.span`
    border-top: 2px solid ${props => props.theme.coastSecondary};
    display: block;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: -24px;
    width: 85%;

    @media (min-width: 768px) {
        width: 65%;
    }
`;

class About extends React.Component {
    render() {
        return(
            <AboutSection className="section">
                <AltSectionHeader text="Who We Are" />
                <Divider />
                <p className="container">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </AboutSection>
        );
    }
}

export default About;