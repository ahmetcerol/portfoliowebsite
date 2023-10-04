import React from "react";
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';
import styled from 'styled-components';


const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 20px;
`;

const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.primary};
  }

  &:checked + span:before {
    transform: translateX(20px);
  }

  &:checked + span:after {
    content: '☀️'; /* Güneş simgesi */
    position: absolute;
    top: 50%;
    left: 2px;
    
    transform: translate(0, -50%);
  }

  &:not(:checked) + span:after {
    content: '🌑'; /* Ay simgesi */
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translate(0, -50%);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.text};
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;



const Navbar = ({toggleTheme}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
   
    return (
<Nav>
    <NavbarContainer>
    <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
          <img src="images/a-letter-logo-png-99.png" alt="Logo"   style={{ width: "3rem", height: "3rem", marginRight:"10px" }}
/><Span>Ahmet Can EROL</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
            <GitHubButton href={Bio.github} target="display">GitHub Profile</GitHubButton>
            <ToggleSwitch>
        <ToggleInput type="checkbox" onChange={toggleTheme} />
        <ToggleSlider />
      </ToggleSwitch>
        </ButtonContainer>
        
    </NavbarContainer>
    {
        isOpen && (
            <MobileMenu isOpen={isOpen}>
            <MobileMenuLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileMenuLink>
            <MobileMenuLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileMenuLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
            <ToggleSwitch>
        <ToggleInput type="checkbox" onChange={toggleTheme} />
        <ToggleSlider />
        </ToggleSwitch>
          </MobileMenu>
        )
    }
</Nav>
    );
};

export default Navbar;