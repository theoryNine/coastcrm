import React from 'react'
import styled from 'styled-components'
import Logo from '../../../components/Logo.js'

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
`

const LogoContainer = styled.div`
    height: 180px;
    margin-bottom: 10px;
`

const CoastName = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    opacity: .9;
`

class ContactInfo extends React.Component {
    render() {
        return(
            <ContactContainer>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <CoastName>Coast CRM</CoastName>
                <p>Fort Worth, Texas</p>
                <p>817-528-1283</p>
            </ContactContainer>
        )
    }
}

export default ContactInfo;