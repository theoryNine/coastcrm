import React from 'react'
import './Footer/footer.css'

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                    <p>
                        Copyright © 2018, Coast CRM. All rights reserved.
                    </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;