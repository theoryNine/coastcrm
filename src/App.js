import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from './App/Layout.js'

const CoastCRM = styled.div`
  font-family: ${props => props.theme.primaryFont};
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
