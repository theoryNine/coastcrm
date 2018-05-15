import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ServiceContainer = styled.div`
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
`

const ServiceHeader = styled.h2`
    color: ${props => props.theme.coastPrimary};
`

const ServiceIconContainer = styled.div`
    align-items: center;
    display: none;
    flex: 2;
    justify-content: center;

    @media (min-width: 760px) {
        display: flex;
    }

    @media (min-width: 960px) {
        flex: 1;
    }
`

const ServiceDescContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex: 5;
    flex-direction: column;
    justify-content: center;
`

class ServiceSection1 extends React.Component {
    render() {
        return(
            <div className="container">
                <ServiceContainer>
                    <ServiceIconContainer>
                        <FontAwesomeIcon icon={["fas", "map"]} size="6x" />
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