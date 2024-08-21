import React, { useState } from 'react';
import styled from 'styled-components';
import closeicon from '../../../assets/closeicon.svg'

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
`;

const NavbarSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Brand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const MobileNavButton = styled.button`
  background: none;
  border: none;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavButtonLine = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background: #000;
  margin: 5px 0;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const VerticalNav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const VerticalNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
`;

const VerticalNavItem = styled.li`
  position: relative;
  cursor: pointer;
  text-align:center;
  padding:5px
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

const VerticalNavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;
const CloseIcon=styled.img`
  width:30px;
  hieght:30px;
`

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <NavbarContainer>
      <NavbarSection>
        <Brand>We17</Brand>
        <MobileNavButton aria-label="Show navigation" onClick={toggleMenu}>
          {isOpenMenu? <CloseIcon src={closeicon} />:
          <>
          <MobileNavButtonLine />
          <MobileNavButtonLine />
          <MobileNavButtonLine />
          </>
          }
          
        </MobileNavButton>
        
        <Nav aria-label="Main">
          <NavList>
            {navItems.map((item, key) => (
              <NavItem key={key}>
                <NavLink>{item}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </NavbarSection>
      <VerticalNav isOpen={isOpenMenu} aria-label="Main">
          <VerticalNavList>
            {navItems.map((item, key) => (
              <VerticalNavItem key={key}>
                <VerticalNavLink>{item}</VerticalNavLink>
              </VerticalNavItem>
            ))}
          </VerticalNavList>
        </VerticalNav>
    </NavbarContainer>
  );
};

export default Navbar;
