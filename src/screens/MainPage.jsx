import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const PageButton = styled(Link)`
  display: block;
  padding: 15px 30px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const MainPage = () => {
  return (
    <Container>
      <Title>🏠 메인 페이지</Title>
      <Description>아래 버튼들을 클릭하여 다른 페이지로 이동하세요!</Description>
      
      <ButtonGrid>
        <PageButton to="/page1">📄 Page 1</PageButton>
        <PageButton to="/page2">📄 Page 2</PageButton>
        <PageButton to="/page3">📄 Page 3</PageButton>
        <PageButton to="/page4">📄 Page 4</PageButton>
        <PageButton to="/page5">📄 Page 5</PageButton>
        <PageButton to="/page6">📄 Page 6</PageButton>
      </ButtonGrid>
    </Container>
  );
};

export default MainPage;
