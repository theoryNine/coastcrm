import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import ServiceListItem from '../../../../components/ServiceListItem.js'

const ServiceContainer = styled.div`
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: row;
    margin: 50px auto;
`

const ServiceHeader = styled.h2`
    color: ${props => props.theme.coastPrimary};
    margin-bottom: 1rem;
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
                        <ServiceHeader>Strategy</ServiceHeader>
                        <ul>
                            <ServiceListItem text="You need a plan for how Salesforce will enable your business, and how to take full advantage of everything Salesforce has to offer." />
                            <ServiceListItem text="We’ll work with your key stakeholders to understand your organization’s top priorities." />
                            <ServiceListItem text="Once we understand what drives you, Coast CRM will work with your team to build an implementation plan that delivers value quickly and aligns with the long-term needs of your business." />
                        </ul>
                    </ServiceDescContainer>
                </ServiceContainer>
            </div>
        )
    }
}

export default ServiceSection1;