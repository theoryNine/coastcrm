import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
import ServiceSection1 from './Services/ServiceSection1.js'
import ScrollableAnchor from 'react-scrollable-anchor'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Services extends React.Component {
    render() {
        return(
            <section className="section">
                <ScrollableAnchor id={'services'}>
                    <SectionHeader text="What We Do" />
                </ScrollableAnchor>
                <Divider />
                <ServiceSection1 />
                <FontAwesomeIcon icon={["fas", "wrench"]} size="6x" />
                <FontAwesomeIcon icon={["fas", "sync"]} size="6x" />
                <FontAwesomeIcon icon={["fas", "globe"]} size="6x" />
            </section>
        );
    }
}

export default Services;