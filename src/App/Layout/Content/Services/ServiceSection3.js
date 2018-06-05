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

class ServiceSection3 extends React.Component {
    render() {
        return(
            <div className="container content-container">
                <ServiceContainer>
                    <ServiceIconContainer>
                        <FontAwesomeIcon icon={["fas", "handshake"]} size="6x" />
                    </ServiceIconContainer>
                    <ServiceDescContainer>
                    <ServiceHeader>Implementation</ServiceHeader>
                    <ul>
                        <ServiceListItem text="Equipped with a shared vision, we’ll get to work bringing the vision to life." />
                        <ServiceListItem text="We work in short development cycles, incorporating feedback from your team early and often, to ensure you love what we build." />
                        <ServiceListItem text="Our team always leverages as many standard and declarative Salesforce features as possible, working to minimize the use of custom code." />
                    </ul>
                </ServiceDescContainer>
                </ServiceContainer>
            </div>
        )
    }
}

export default ServiceSection3;