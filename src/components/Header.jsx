import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GowunBatang';
    src: url('./fonts/GowunBatang.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 130px;
  background-color: white;
  border-top: 1px solid #d1d5db;
  border-bottom: 1px solid #d1d5db;
`;

const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 100;
  color: black;
  letter-spacing: 0.05em;
  font-family: 'GowunBatang', serif;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled.a`
  color: #374151;
  font-size: 16px;
  font-weight: 100;
  text-decoration: none;
  transition: colors 0.2s;
  font-family: 'GowunBatang', serif;
  
  &:hover {
    color: #2563eb;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LoginButton = styled.button`
  color: #374151;
  font-size: 16px;
  font-weight: 100;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  font-family: 'GowunBatang', serif;
  
  &:hover {
    color: #2563eb;
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
  }
`;

const HamburgerLine = styled.div`
  width: 24px;
  height: 2px;
  background-color: black;
`;

const FrameIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-size: 12px;
  color: #9ca3af;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Left side - Logo and Navigation */}
        <LeftSection>
          {/* Logo */}
          <Logo>BENEFIT MAP</Logo>
          
          {/* Navigation Menu */}
          <Navigation>
            <NavLink href="#">복지 서비스</NavLink>
            <NavLink href="#">복지 알림</NavLink>
            <NavLink href="#">알림 캘린더</NavLink>
          </Navigation>
        </LeftSection>

        {/* Right side - Login and Menu */}
        <RightSection>
          {/* Login */}
          <LoginButton>LOGIN</LoginButton>
          
          {/* Hamburger Menu */}
          <HamburgerButton>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </HamburgerButton>
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;