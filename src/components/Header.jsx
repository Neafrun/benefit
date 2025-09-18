import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        My Website
      </Logo>
      <Nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/page1">Page 1</NavLink>
        <NavLink to="/page2">Page 2</NavLink>
        <NavLink to="/page3">Page 3</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;