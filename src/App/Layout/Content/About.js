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

    & h2 {
        font-weight: 600;
    }
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
                        We've implemented Salesforce solutions across industries and with companies of all sizes for over a decade.</li>
                        <li><h2><em>Expertise.</em></h2>
                        Impecable technical skills and mastery of best practices; we craft quality.</li>
                        <li><h2><em>Focus.</em></h2>
                        User experience matters - if it’s hard to use, people won’t adopt.</li>
                    </ul>
                </div>
            </AboutSection>
        );
    }
}

export default About;