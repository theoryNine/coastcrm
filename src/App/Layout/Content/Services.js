import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
import ServiceSection1 from './Services/ServiceSection1.js'
import ServiceSection2 from './Services/ServiceSection2.js'
import ServiceSection3 from './Services/ServiceSection3.js'
import ServiceSection4 from './Services/ServiceSection4.js'
import ScrollableAnchor from 'react-scrollable-anchor'

class Services extends React.Component {
    render() {
        return(
            <section className="section">
                <ScrollableAnchor id={'services'}>
                    <SectionHeader text="Salesforce Services" />
                </ScrollableAnchor>
                <Divider />
                <ServiceSection1 />
                <ServiceSection2 />
                <ServiceSection3 />
                <ServiceSection4 />
            </section>
        );
    }
}

export default Services;