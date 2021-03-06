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

class ServiceSection2 extends React.Component {
    render() {
        return(
            <div className="container content-container">
                <ServiceContainer>
                    <ServiceDescContainer>
                        <ServiceHeader>Design</ServiceHeader>
                        <ul className="has-text-right">
                            <ServiceListItem text="With the implementation plan in place, we design the first set of functionality we’ll deliver." />
                            <ServiceListItem text="We focus on designing our solutions to enable your business objectives, provide intuitive interfaces for your teams and customers, and follow all technical best practices." />
                            <ServiceListItem text="The output of the design phase is a set of well understood requirements, documented as user stories, allowing our team to start building with confidence." />
                        </ul>
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