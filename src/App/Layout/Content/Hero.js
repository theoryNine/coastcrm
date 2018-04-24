import React from 'react'
import styled from 'styled-components'
import LogoCopy from './Hero/logocopy.png'
import HeroBg from './Hero/herobg80.png'
import FullLogo from './Hero/logo.png'

const HeroImage = styled.div`
    background-image: url(${HeroBg});
    border-bottom: 2px solid ${props => props.theme.primaryColor};
`;

const LogoTextMobile = styled.img`
    max-width: 250px;

    @media (min-width: 768px) {
        display: none;
    }
`;

const LogoTextDesktop = styled.img`
    display: none;
    margin-top: 70px;

    @media (min-width: 768px) {
        display: inline-block;
        width: 35%;
        margin-top: 8px;
    }
`;

class Hero extends React.Component {
    render() {
        return(
            <HeroImage className="hero header-image is-large">
                <div className="hero-head container"><LogoTextDesktop src={LogoCopy} /></div>
                <div className="hero-body container"><LogoTextMobile src={FullLogo} /></div>
                <div className="hero-foot"></div>
            </HeroImage>
        );
    }
}

export default Hero;