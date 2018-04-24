import React from 'react'
import Header from './Layout/Header.js'
import Content from './Layout/Content.js'

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default Layout;