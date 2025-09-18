import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegBell } from 'react-icons/fa'; // 속이 빈 종 아이콘으로 변경
import { HiMenu } from 'react-icons/hi';

const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1200px; /* 최대 너비 설정 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(Link)`
  font-family: 'Times New Roman', Times, serif; /* 세리프 폰트로 변경 */
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 1.5px; /* 글자 간격 조정 */
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 50px; /* 메뉴 간격 조정 */
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #555;
  transition: color 0.2s ease-in-out;
  
  &:hover {
    color: #000;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px; /* 아이콘/버튼 간격 조정 */
`;

const IconWrapper = styled.div`
  font-size: 26px; /* 아이콘 크기 조정 */
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LoginButton = styled(Link)`
  font-family: 'Times New Roman', Times, serif; /* 세리프 폰트로 변경 */
  font-size: 16px;
  letter-spacing: 1px; /* 글자 간격 조정 */
  font-weight: normal;
  color: #555;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(IconWrapper)`
  font-size: 28px; /* 메뉴 아이콘 크기 조정 */
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo to="/">BENEFIT MAP</Logo>
        <NavLinks>
          <NavLink to="/service">복지 서비스</NavLink>
          <NavLink to="/notification">복지 알림</NavLink>
          <NavLink to="/calendar">알림 캘린더</NavLink>
        </NavLinks>
        <UserActions>
          <IconWrapper>
            <FaRegBell />
          </IconWrapper>
          <LoginButton to="/login">LOGIN</LoginButton>
          <MenuIcon>
            <HiMenu />
          </MenuIcon>
        </UserActions>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;

