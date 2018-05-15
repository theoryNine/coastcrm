import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ServiceContainer = styled.div`
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: row;
    margin: 50px auto;
    margin-top: auto;
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

    & p {
        text-align: left;

        @media (min-width: 760px) {
            text-align: right;
        }
    }

    @media (min-width: 760px) {
        align-items: flex-end;
        width: 80%;
    }
`

class ServiceSection2 extends React.Component {
    render() {
        return(
            <div className="container content-container">
                <ServiceContainer>
                    <ServiceDescContainer>
                        <ServiceHeader>Execution & Implementation</ServiceHeader>
                        <p>Where does Salesforce fit into your business in today's technology landscape? 
                        Coast CRM will help you design your perfect Salesforce solution, tailored to the long-term strategic needs of your business.</p>
                    </ServiceDescContainer>
                    <ServiceIconContainer>
                        <FontAwesomeIcon icon={["fas", "cog"]} size="6x" />
                    </ServiceIconContainer>
                </ServiceContainer>
            </div>
        )
    }
}

export default ServiceSection2;