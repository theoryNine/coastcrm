import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import ServiceListItem from '../../../../components/ServiceListItem.js'

const ServiceContainer = styled.div`
    color: ${props => props.theme.coastPrimary};
    display: flex;
    flex-direction: row;
    margin: 50px auto;
    margin-top: auto;
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

    & p {
        text-align: left;

        @media (min-width: 760px) {
            text-align: right;
        }
    }

    & ul {
        & li {
            text-align: left;
        }
    }

    @media (min-width: 760px) {
        align-items: flex-end;
        width: 80%;

        & ul {
            & li {
                text-align: right;
            }
        }
    }
`

class ServiceSection4 extends React.Component {
    render() {
        return(
            <div className="container content-container">
                <ServiceContainer>
                    <ServiceDescContainer>
                        <ServiceHeader>Sustainable Partners</ServiceHeader>
                        <ul className="has-text-right">
                            <ServiceListItem text="Your business is always evolving, and Salesforce needs to follow suit." />
                            <ServiceListItem text="Coast CRM will partner with your team to ensure your Salesforce implementation is always tailored to deliver maximum value to your organization." />
                            <ServiceListItem text="We’ll also help you stay on top of Salesforce’s major feature releases, and implement the ones that are best suited to help your business." />
                        </ul>
                    </ServiceDescContainer>
                    <ServiceIconContainer>
                        <FontAwesomeIcon icon={["fas", "edit"]} size="6x" />
                    </ServiceIconContainer>
                </ServiceContainer>
            </div>
        )
    }
}

export default ServiceSection4;