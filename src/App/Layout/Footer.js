import React from 'react'
import './Footer/footer.css'
import styled from 'styled-components'

const Copyright = styled.p`
    font-size: .8rem;
`;

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                    <Copyright>
                        Copyright © 2018, Coast CRM. All rights reserved.
                    </Copyright>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;