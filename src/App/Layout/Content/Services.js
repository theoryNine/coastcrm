import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
import ServiceSection1 from './Services/ServiceSection1.js'
import ServiceSection2 from './Services/ServiceSection2.js'
import ServiceSection3 from './Services/ServiceSection3.js'
import ScrollableAnchor from 'react-scrollable-anchor'

class Services extends React.Component {
    render() {
        return(
            <section className="section">
                <ScrollableAnchor id={'services'}>
                    <SectionHeader text="What We Do" />
                </ScrollableAnchor>
                <Divider />
                <ServiceSection1 />
                <ServiceSection2 />
                <ServiceSection3 />
            </section>
        );
    }
}

export default Services;