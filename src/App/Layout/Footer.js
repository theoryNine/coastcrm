import React from 'react'
import './Footer/footer.css'
import styled from 'styled-components'

const Copyright = styled.p`
    font-size: .8rem;
`;

const FooterSection = styled.footer`
    background-color: ${props => props.theme.coastPrimary};
`;

class Footer extends React.Component {
    render() {
        return(
            <FooterSection className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                    <Copyright className="light">
                        Copyright © 2018, Coast CRM. All rights reserved.
                    </Copyright>
                    </div>
                </div>
            </FooterSection>
        )
    }
}

export default Footer;