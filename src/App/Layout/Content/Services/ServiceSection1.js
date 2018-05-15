import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ServiceContainer = styled.div`
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: row;
    margin: 50px auto;
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

class ServiceSection1 extends React.Component {
    render() {
        return(
            <div className="container content-container">
                <ServiceContainer>
                    <ServiceIconContainer>
                        <FontAwesomeIcon icon={["fas", "compass"]} size="6x" />
                    </ServiceIconContainer>
                    <ServiceDescContainer>
                        <ServiceHeader>Design & Strategy</ServiceHeader>
                        <p>Where does Salesforce fit into your business in today's technology landscape? 
                        Coast CRM will help you design your perfect Salesforce solution, tailored to the long-term strategic needs of your business.</p>
                    </ServiceDescContainer>
                </ServiceContainer>
            </div>
        )
    }
}

export default ServiceSection1;