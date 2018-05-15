import React from 'react'
import styled from 'styled-components'
import AltSectionHeader from '../../../components/AltSectionHeader.js'
import Divider from '../../../components/Divider.js'
import Pattern from './About/cubes.png'
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutSection = styled.section`
    background-color: ${props => props.theme.coastPrimary};
    background-image: url(${Pattern});
    text-align: center;
`;

class About extends React.Component {
    render() {
        return(
            <AboutSection className="section shadowed light">
                <ScrollableAnchor id={'about'}>
                    <AltSectionHeader light={true} text="Who We Are" />
                </ScrollableAnchor>
                <Divider />
                <div className="container light">
                    <ul>
                        <li><h2><em>Experience.</em></h2>
                        We've implemented Salesforce solutions across industries and with companies of all sizes for over 10 years.</li>
                        <li><h2><em>Focus.</em></h2>
                        User experience matters - if it’s hard to use, people won't use it. We create effective, intuitive experiences tailored to your needs.</li>
                        <li><h2><em>Mastery.</em></h2>
                        Impecable technical skills and a deep understanding of best practices; we craft the quality you deserve.</li>
                    </ul>
                </div>
            </AboutSection>
        );
    }
}

export default About;