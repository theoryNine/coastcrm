import React from 'react'
import styled from 'styled-components'
import AltSectionHeader from '../../../components/AltSectionHeader.js'
import Divider from '../../../components/Divider.js'
import Pattern from './About/cubes.png'
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutSection = styled.section`
    background-color: ${props => props.theme.coastPrimary};
    background-image: url(${Pattern});
`;

class About extends React.Component {
    render() {
        return(
            <AboutSection className="section light">
                <ScrollableAnchor id={'about'}>
                    <AltSectionHeader light={true} text="Who We Are" />
                </ScrollableAnchor>
                <Divider />
                <p className="container light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </AboutSection>
        );
    }
}

export default About;