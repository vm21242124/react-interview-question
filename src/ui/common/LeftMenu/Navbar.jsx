import React from 'react';
import styled from 'styled-components';

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

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  position: relative;
  cursor:pointer;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

const Navbar = () => {
  const navitems=["Home","About","Services","Contact"]
  return (
    <NavbarContainer>
      <NavbarSection>
        <Brand href="/index">We17</Brand>
        <MobileNavButton aria-label="Show navigation">
          <MobileNavButtonLine />
          <MobileNavButtonLine />
          <MobileNavButtonLine />
        </MobileNavButton>
        <Nav aria-label="Main">
          <NavList>
          {navitems.map((item,key)=>(
            <NavItem>

              <NavLink key={key}>{item}</NavLink>
            </NavItem>
          ))}
          
          </NavList>
        </Nav>
      </NavbarSection>
    </NavbarContainer>
  );
};

export default Navbar;
