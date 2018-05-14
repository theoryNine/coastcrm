import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
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
                <p className="container">
                <FontAwesomeIcon icon={["fas", "cloud"]} size="6x" />
                <FontAwesomeIcon icon={["fas", "wrench"]} size="6x" />
                <FontAwesomeIcon icon={["fas", "sync"]} size="6x" />
                <FontAwesomeIcon icon={["fas", "globe"]} size="6x" />
                </p>
            </section>
        );
    }
}

export default Services;