import React from 'react'
import './Footer/footer.css'
import styled from 'styled-components'
import Moment from 'react-moment';

const Copyright = styled.p`
    font-size: .8rem;

    & time {
        font-size: .8rem;
    }
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
                        Copyright © <Moment format="YYYY"></Moment>, Coast CRM. All rights reserved.
                    </Copyright>
                    </div>
                </div>
            </FooterSection>
        )
    }
}

export default Footer;