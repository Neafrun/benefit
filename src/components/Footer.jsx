import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #555;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s;
  
  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <FooterLinks>
          <FooterLink href="#">개인정보처리방침</FooterLink>
          <FooterLink href="#">이용약관</FooterLink>
          <FooterLink href="#">고객센터</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;