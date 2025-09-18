import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GowunBatang';
    src: url('./fonts/GowunBatang.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'GowunBatang', serif;
    background-color: #f5f5f5;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
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
  transition: color 0.2s;
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

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FilterSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FilterTabs = styled.div`
  display: flex;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const FilterTab = styled.div`
  flex: 1;
  background-color: #4a9d5f;
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

const FilterContent = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const FilterColumn = styled.div`
  flex: 1;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const SearchSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const SearchLabel = styled.span`
  font-size: 14px;
  min-width: 60px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-width: 120px;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  max-width: 300px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

const ResetButton = styled(Button)`
  background-color: #999;
  color: white;
  
  &:hover {
    background-color: #777;
  }
`;

const SearchButton = styled(Button)`
  background-color: #4a9d5f;
  color: white;
  
  &:hover {
    background-color: #3d8450;
  }
`;

const ResultsSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ResultsText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const CardHeader = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const CardTag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const CardInfo = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 15px;
`;

const CardButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ApplyButton = styled(CardButton)`
  background-color: #4a9d5f;
  color: white;
  border-color: #4a9d5f;
  
  &:hover {
    background-color: #3d8450;
  }
`;

const BenefitPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const cardData = [
    {
      tags: ['서울', '청년', '취업'],
      title: '청년취업성공패키지',
      description: '만 18세 이상 34세 이하의 청년을 대상으로 취업상담, 직업훈련, 취업알선 등을 종합적으로 지원하는 프로그램입니다.',
      department: '고용노동부 서울지방고용노동청',
      period: '2024.01.01 ~ 2024.12.31',
      contact: '02-123-4567'
    },
    {
      tags: ['전국', '청년', '취업'],
      title: '청년취업성공패키지',
      description: '만 18세 이상 34세 이하의 청년을 대상으로 취업상담, 직업훈련, 취업알선 등을 종합적으로 지원하는 프로그램입니다.',
      department: '고용노동부 서울지방고용노동청',
      period: '2024.01.01 ~ 2024.12.31',
      contact: '02-123-4567'
    },
    {
      tags: ['서울', '청년', '취업'],
      title: '청년취업성공패키지',
      description: '만 18세 이상 34세 이하의 청년을 대상으로 취업상담, 직업훈련, 취업알선 등을 종합적으로 지원하는 프로그램입니다.',
      department: '고용노동부 서울지방고용노동청',
      period: '2024.01.01 ~ 2024.12.31',
      contact: '02-123-4567'
    },
    {
      tags: ['전국', '청년', '취업'],
      title: '청년취업성공패키지',
      description: '만 18세 이상 34세 이하의 청년을 대상으로 취업상담, 직업훈련, 취업알선 등을 종합적으로 지원하는 프로그램입니다.',
      department: '고용노동부 서울지방고용노동청',
      period: '2024.01.01 ~ 2024.12.31',
      contact: '02-123-4567'
    },
    {
      tags: ['서울', '청년', '취업'],
      title: '청년취업성공패키지',
      description: '만 18세 이상 34세 이하의 청년을 대상으로 취업상담, 직업훈련, 취업알선 등을 종합적으로 지원하는 프로그램입니다.',
      department: '고용노동부 서울지방고용노동청',
      period: '2024.01.01 ~ 2024.12.31',
      contact: '02-123-4567'
    },
    {
      tags: ['전국', '청년', '취업'],
      title: '청년취업성공패키지',
      description: '만 18세 이상 34세 이하의 청년을 대상으로 취업상담, 직업훈련, 취업알선 등을 종합적으로 지원하는 프로그램입니다.',
      department: '고용노동부 서울지방고용노동청',
      period: '2024.01.01 ~ 2024.12.31',
      contact: '02-123-4567'
    }
  ];

  return (
    <Container>
      <GlobalStyle />
      <Header />
      {/* Main Content */}
      <MainContent>
        {/* Filter Section */}
        <FilterSection>
          <FilterTabs>
            <FilterTab>생애주기</FilterTab>
            <FilterTab>가구상황</FilterTab>
            <FilterTab>관심분야</FilterTab>
          </FilterTabs>
          <FilterContent>
            <FilterColumn>
              <CheckboxGroup>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  영유아, 아동
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  청소년
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  청년
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  중장년
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  노인
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  전체
                </CheckboxItem>
              </CheckboxGroup>
            </FilterColumn>
            <FilterColumn>
              <CheckboxGroup>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  한부모
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  다문화
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  조손가족, 소년소녀
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  일반가구
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  장애인 가구
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  한부모가족
                </CheckboxItem>
              </CheckboxGroup>
            </FilterColumn>
            <FilterColumn>
              <CheckboxGroup>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  신체건강
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  정신건강
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  입양
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  보육, 돌봄
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  교육
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  고용, 취업
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  주거지원
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  생활지원
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  법률지원
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  기타
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" />
                  문화, 여가
                </CheckboxItem>
              </CheckboxGroup>
            </FilterColumn>
          </FilterContent>
        </FilterSection>

        {/* Search Section */}
        <SearchSection>
          <SearchRow>
            <SearchLabel>지역</SearchLabel>
            <Select>
              <option>전국</option>
              <option>서울시</option>
              <option>경기도</option>
            </Select>
            <Select>
              <option>시/군 선택</option>
              <option>강남구</option>
              <option>강북구</option>
            </Select>
          </SearchRow>
          <SearchRow>
            <SearchLabel>나이</SearchLabel>
            <Select>
              <option>전</option>
              <option>0</option>
              <option>18</option>
            </Select>
            <span>세</span>
            <Select>
              <option>체</option>
              <option>100</option>
              <option>65</option>
            </Select>
          </SearchRow>
          <SearchRow>
            <SearchLabel>키워드</SearchLabel>
            <SearchInput 
              type="text" 
              placeholder="복지서비스 통합검색"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </SearchRow>
          <ButtonRow>
            <ResetButton>초기화</ResetButton>
            <SearchButton>검색</SearchButton>
          </ButtonRow>
        </SearchSection>

        {/* Results */}
        <ResultsSection>
          <ResultsText>총 3,530 건의 복지 서비스가 있습니다.</ResultsText>
          <CardGrid>
            {cardData.map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  {card.tags.map((tag, tagIndex) => (
                    <CardTag key={tagIndex}>{tag}</CardTag>
                  ))}
                </CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardInfo>
                  <div>담당기관: {card.department}</div>
                  <div>신청기간: {card.period}</div>
                  <div>문의처: {card.contact}</div>
                </CardInfo>
                <CardButtons>
                  <CardButton>상세보기</CardButton>
                  <ApplyButton>신청하기</ApplyButton>
                </CardButtons>
              </Card>
            ))}
          </CardGrid>
        </ResultsSection>
      </MainContent>
    </Container>
  );
};

export default ServicePage;