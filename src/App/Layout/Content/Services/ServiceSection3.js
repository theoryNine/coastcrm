import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ServiceContainer = styled.div`
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: row;
    margin: auto;
`

const ServiceHeader = styled.h2`
    color: ${props => props.theme.coastPrimary};
`

const ServiceIconContainer = styled.div`
    align-items: center;
    display: none;
    justify-content: center;

    @media (min-width: 760px) {
        display: flex;
        width: 20%;
    }
`

const ServiceDescContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media (min-width: 760px) {
        width: 80%;
    }
`

class ServiceSection3 extends React.Component {
    render() {
        return(
            <div className="container content-container">
                <ServiceContainer>
                    <ServiceIconContainer>
                        <FontAwesomeIcon icon={["fas", "handshake"]} size="6x" />
                    </ServiceIconContainer>
                    <ServiceDescContainer>
                        <ServiceHeader>Sustainable Partners</ServiceHeader>
                        <p>Your business is constantly changing, your Salesforce implementations need to keep up. Salesforce 
                        releases new features 3 times a year, Coast CRM will stay with you to help evolve your Salesforce 
                        solutions to take advantage of the latest features.</p>
                    </ServiceDescContainer>
                </ServiceContainer>
            </div>
        )
    }
}

export default ServiceSection3;