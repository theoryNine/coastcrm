import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
import ScrollableAnchor from 'react-scrollable-anchor'

class Contact extends React.Component {
    render() {
        return(
            <section className="section">
                <ScrollableAnchor id={'contact'}>
                    <SectionHeader text="Let's Talk" />
                </ScrollableAnchor>
                <Divider />
                <p className="container">
                    Let us know about your Salesforce project and we'll help you with the next steps.
                </p>
            </section>
        );
    }
}

export default Contact;