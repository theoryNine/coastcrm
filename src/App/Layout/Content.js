import React from 'react'
import Hero from './Content/Hero.js'
import Services from './Content/Services.js'
import About from './Content/About.js'
import Contact from './Content/Contact.js'

class Content extends React.Component {
    render() {
        return(
            <div>
                <Hero />
                <Services />
                <About />
                <Contact />
            </div>
        );
    }
}

export default Content;