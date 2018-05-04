import React from 'react'
import styled from 'styled-components'
import LogoCopy from './Hero/logocopy.png'
import HeroBg from './Hero/option3.jpg'
import FullLogo from './Hero/logo.png'
import Tagline from './Hero/Tagline.js'

const HeroImage = styled.div`
    position: relative;

    &:before {
            content: "";
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%; 
            height: 100%;
            opacity: .5; 
            z-index: -1;
            background: url(${HeroBg});
            background-size: cover;
            background-position: center;

            @media (min-width: 768px) {
                opacity: .6;
            }
    }
`;

const LogoTextMobile = styled.img`
    max-width: 250px;

    @media (min-width: 768px) {
        display: none;
    }
`;

const LogoTextDesktop = styled.img`
    display: none;
    margin-left: -4%;
    margin-top: 70px;

    @media (min-width: 768px) {
        display: inline-block;
        width: 40%;
        margin-top: 10px;
    }
`;

class Hero extends React.Component {
    render() {
        return(
            <HeroImage className="hero is-large shadowed" alt="Hero Banner. Coastal scene with a lighthouse in the background">
                <div className="hero-head container"><LogoTextDesktop src={LogoCopy} alt="Coast CRM" /></div>
                <Tagline text="Expanding your Salesforce horizons" />
                <div className="hero-body container"><LogoTextMobile src={FullLogo} alt="Coast CRM Logo" /></div>
                <div className="hero-foot"></div>
            </HeroImage>
        );
    }
}

export default Hero;