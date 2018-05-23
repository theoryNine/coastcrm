import React from 'react'
import SectionHeader from '../../../components/SectionHeader.js'
import Divider from '../../../components/Divider.js'
import ScrollableAnchor from 'react-scrollable-anchor'
import ContactInfo from './ContactInfo.js'
import ContactForm from '../../../components/ContactForm.js'
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const FormContainer = styled.div`
    display: flex;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`

const ContactInfoContainer = styled.div`
    display: flex;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`

class Contact extends React.Component {
    render() {
        return(
            <section className="section">
                <ScrollableAnchor id={'contact'}>
                    <SectionHeader text="Let's Talk" />
                </ScrollableAnchor>
                <Divider />
                <FlexContainer className="container content-container">
                    <FormContainer>
                        <ContactForm />
                    </FormContainer>
                    <ContactInfoContainer>
                        <ContactInfo />
                    </ContactInfoContainer>
                </FlexContainer>
                </section>
        );
    }
}

export default Contact;