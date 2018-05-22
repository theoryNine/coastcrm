import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
import ScrollableAnchor from 'react-scrollable-anchor'
import ContactForm from '../../../components/ContactForm.js'

class Contact extends React.Component {
    render() {
        return(
            <section className="section">
                <ScrollableAnchor id={'contact'}>
                    <SectionHeader text="Let's Talk" />
                </ScrollableAnchor>
                <Divider />
                <div className="container content-container">
                    <ContactForm />
                </div>
                </section>
        );
    }
}

export default Contact;