import React from "react";
import {TextLoop,Title, Img,SubTitle,Span,HeroContainer, HeroBg, HeroInnerContainer, HeroLeftContainer, HeroRightContainer } from "./HeroStyle";
import {Bio} from "../../data/constants";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import HeroAnimation from "../HeroBgAnimation";


const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: ${({ theme }) => `linear-gradient(225deg, ${theme.primary} 0%, ${theme.button} 100%)`};
    box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    
    
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    
    }    
    
    
    @media  screen and (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

const Hero = () => {
    return (
<div id="about">
    <HeroContainer>
        <HeroBg>
            <HeroAnimation/>
        </HeroBg>
        <HeroInnerContainer>
            <HeroLeftContainer>
                <Title> Hi, I am <br/> {Bio.name}</Title>
                <TextLoop>
                    I am a 
                    <Span>
                        <Typewriter   options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}/>
                    </Span>
                </TextLoop>
                <SubTitle>{Bio.description}</SubTitle>
                <ResumeButton href= {Bio.resume} target="display">Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
                <Img src="/images/HeroImage.webp" alt="Hero"/>                                       
            </HeroRightContainer>
        </HeroInnerContainer>
    </HeroContainer>
</div>
    )
};

export default Hero;