import React from 'react';
import styled from 'styled-components';
// 아이콘들을 사용하기 위해 react-icons 라이브러리에서 필요한 것들을 가져옴
import { FaSearch, FaBell } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

// --- 스타일링 부분 (styled-components) ---

// 전체 페이지를 감싸는 컨테이너
const PageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Noto Sans KR', sans-serif; // 깔끔한 한글 폰트
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

// 헤더 (로고, 메뉴, 로그인)
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 40px;
  @media (max-width: 768px) { // 화면 작아지면 숨김
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #5a8b2e;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconWrapper = styled.div`
  font-size: 22px;
  color: #555;
  cursor: pointer;
`;

const LoginButton = styled.a`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  cursor: pointer;
   @media (max-width: 768px) { // 화면 작아지면 숨김
    display: none;
  }
`;

const MenuIcon = styled(IconWrapper)`
  display: none; // 평소엔 숨김
  @media (max-width: 768px) { // 화면 작아지면 보임
    display: block;
  }
`;


// 검색창
const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 50px 15px 25px;
  border-radius: 30px;
  border: 2px solid #7DB249;
  background-color: #f0f7e9;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #888;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #7DB249;
`;

// 캘린더
const CalendarContainer = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 50px;
`;

const CalendarHeader = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const DayLabel = styled.div`
  padding: 10px 0;
  font-weight: bold;
  color: #777;
`;

const DayCell = styled.div`
  height: 100px;
  border-top: 1px solid #f0f0f0;
  padding: 5px;
  font-size: 14px;
  position: relative;
  
  &:nth-child(7n+1) { // 일요일
    color: red;
  }
  &:nth-child(7n) { // 토요일
    color: blue;
  }
`;

const EventTag = styled.div`
  background-color: ${props => props.color || '#ffffa1'};
  color: #555;
  font-size: 12px;
  padding: 3px 5px;
  border-radius: 5px;
  position: absolute;
  left: 5px;
  right: 5px;
  top: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 키워드 및 추천 섹션
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #7DB249;
  color: white;
  text-align: center;
  padding: 12px 0;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const KeywordButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap; // 화면 작아지면 줄바꿈
  justify-content: center;
`;

const KeywordButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 12px 35px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f0f7e9;
    border-color: #7DB249;
  }
`;

const RecommendationBox = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  font-size: 18px;
`;


// --- 캘린더 데이터 ---
// 2025년 6월 데이터. 6월 1일은 일요일부터 시작.
const calendarDays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
const events = {
  3: "청년 주택 지원",
  11: "채움 공제 지원",
  27: "학자금",
};

// --- 메인 컴포넌트 ---

const MainPage = () => {
  return (
    <PageContainer>
      {/* 헤더 */}
      <Header>
        <Logo>BENEFIT MAP</Logo>
        <NavLinks>
          <NavLink>복지 서비스</NavLink>
          <NavLink>복지 알림</NavLink>
          <NavLink>알림 캘린더</NavLink>
        </NavLinks>
        <UserActions>
          <IconWrapper><FaBell /></IconWrapper>
          <LoginButton>LOGIN</LoginButton>
          <MenuIcon><HiMenu /></MenuIcon>
        </UserActions>
      </Header>

      {/* 검색창 */}
      <SearchBarContainer>
        <SearchInput placeholder="검색어를 입력하세요." />
        <SearchIcon />
      </SearchBarContainer>

      {/* 캘린더 */}
      <CalendarContainer>
        <CalendarHeader>2025년 6월</CalendarHeader>
        <CalendarGrid>
          {['일', '월', '화', '수', '목', '금', '토'].map(day => <DayLabel key={day}>{day}</DayLabel>)}
          {calendarDays.map((day, index) => (
            <DayCell key={index}>
              {day}
              {events[day] && <EventTag>{events[day]}</EventTag>}
            </DayCell>
          ))}
        </CalendarGrid>
      </CalendarContainer>

      {/* 이달의 복지 키워드 */}
      <Section>
        <SectionTitle>이달의 복지 키워드</SectionTitle>
        <KeywordButtons>
          <KeywordButton>청년월세</KeywordButton>
          <KeywordButton>연금</KeywordButton>
          <KeywordButton>아동복지</KeywordButton>
        </KeywordButtons>
      </Section>
      
      {/* 맞춤 추천 복지 */}
      <Section>
        <SectionTitle>맞춤 추천 복지</SectionTitle>
        <RecommendationBox>
          로그인 후 이용해 주세요.
        </RecommendationBox>
      </Section>

    </PageContainer>
  );
};

export default MainPage;