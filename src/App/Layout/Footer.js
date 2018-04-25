import React from 'react'
import './Footer/footer.css'

class Footer extends React.Component {
    render() {
        return(
            <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
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