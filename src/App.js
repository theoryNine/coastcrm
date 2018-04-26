import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from './App/Layout.js'

const CoastCRM = styled.div`
    font-family: ${props => props.theme.primaryFont};
    font-size: 1rem;

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
