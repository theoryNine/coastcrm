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

    & ul {
        & h2 {
            margin-bottom: 1rem;
        }

        & li {
            margin-bottom: 2.5rem;
            & ul {
                & li {
                    margin-bottom: 1rem;
                }
            }
        }
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
                        <li><h2><em>We Know Salesforce</em></h2>
                            <ul>
                                <li>With more than a decade of Salesforce experience across a variety of industries, Coast CRM brings an unmatched level of expertise to each of our engagements.</li>
                                <li>We’ve managed Salesforce implementations for multinational enterprises as well as local non-profits.</li>
                                <li>Whether you’re looking to set up Sales Cloud to enable your growing sales team, implement Live Agent and Service Cloud to better support your customers, or build a custom application to replace a homegrown on-premise app, we can help you realize your vision.</li>
                            </ul>
                        </li>
                        <li><h2><em>User Experience Advocates</em></h2>
                            <ul>
                                <li>An investment in Salesforce is wasted if you end up with a system that is difficult to use.</li>
                                <li>We focus on user experience early in the design phase and throughout the implementation process to deliver a system your users will find easy to use, and to drive adoption.</li>
                            </ul>
                        </li>
                        <li><h2><em>Technical Experts</em></h2>
                            <ul>
                                <li>Our wide variety of projects and industries has given us hands-on experience implementing nearly every aspect of the Salesforce platform.</li>
                                <li>Our developers are experts at the full range of Salesforce technologies, including workflows, Apex triggers, standard and custom APIs, Visualforce, and Lightning components.</li>
                                <li>We also have extensive experience integrating Salesforce with other systems, through middleware tools as well as custom built integrations.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </AboutSection>
        );
    }
}

export default About;