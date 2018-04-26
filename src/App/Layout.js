import React from 'react'
import Header from './Layout/Header.js'
import Content from './Layout/Content.js'
import Footer from './Layout/Footer.js'

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Layout;