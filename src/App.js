import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from './App/Layout.js'

const CoastCRM = styled.div`
    font-family: ${props => props.theme.primaryFont};
    font-size: 1rem;

    & .light {
        color: ${props => props.theme.coastSecondary};

        & .title {
            color: ${props => props.theme.coastSecondary};
        }

        & .divider-line {
            background: ${props => props.theme.coastSecondary};
            background: linear-gradient(90deg, rgba(38,47,77,1) 0%, rgba(38,47,77,1) 0%, rgba(232,233,235,1) 100%);
            margin-left: auto;
            margin-right: -24px;
        }
    }

    & p {
        color: ${props => props.theme.coastPrimary};
    }

    & .title {
        color: ${props => props.theme.coastPrimary};

        & .light {
            color: ${props => props.theme.coastSecondary};
        }
    }

    & p .light {
        color: ${props => props.theme.coastPrimary};
    }

    & .shadowed {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.65);
    }

    & .container {
        @media (min-width: 768px) {
            width: 90%;
        }
    
        @media (min-width: 1088px) {
            margin: auto;
        }
    }

    @media (min-width: 768px) {
        font-size: 1.1rem;
        line-height: 2.1rem;
    }
`

class App extends Component {
    render() {
        return (
            <CoastCRM className="App">
                <Layout />
            </CoastCRM>
        );
    }
}

export default App;
