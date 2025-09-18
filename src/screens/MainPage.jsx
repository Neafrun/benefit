import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

// --- 스타일링 부분 (styled-components) ---

const PageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MonthNavButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 0 15px;
    color: #555;
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
  
  &:nth-child(7n+1) { /* 일요일 */
    color: red;
  }
  &:nth-child(7n) { /* 토요일 */
    color: blue;
  }
`;

const EventTag = styled.div`
  background-color: ${props => props.color || '#ffffa1'};
  color: #555;
  font-size: 12px;
  padding: 3px 5px;
  border-radius: 5px;
  margin: 2px auto 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
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
  flex-wrap: wrap;
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


// --- 메인 컴포넌트 ---
const MainPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5)); 
  const [calendarDays, setCalendarDays] = useState([]);

  const events = {
    '2025-6-3': "청년 주택 지원",
    '2025-6-11': "채움 공제 지원",
    '2025-6-27': "학자금",
  };
  
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, key: `empty-${i}`});
    }
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push({ day: i, key: i });
    }
    setCalendarDays(days);
  }, [currentDate]);

  const goToPreviousMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };


  return (
    <PageContainer>
      <SearchBarContainer>
        <SearchInput placeholder="검색어를 입력하세요." />
        <SearchIcon />
      </SearchBarContainer>

      <CalendarContainer>
        <CalendarHeader>
            <MonthNavButton onClick={goToPreviousMonth}>&lt;</MonthNavButton>
            {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
            <MonthNavButton onClick={goToNextMonth}>&gt;</MonthNavButton>
        </CalendarHeader>
        <CalendarGrid>
          {['일', '월', '화', '수', '목', '금', '토'].map(day => <DayLabel key={day}>{day}</DayLabel>)}
          {calendarDays.map(d => (
            <DayCell key={d.key}>
              {d.day}
              {d.day && events[`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${d.day}`] && (
                  <EventTag>
                      {events[`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${d.day}`]}
                  </EventTag>
              )}
            </DayCell>
          ))}
        </CalendarGrid>
      </CalendarContainer>

      <Section>
        <SectionTitle>이달의 복지 키워드</SectionTitle>
        <KeywordButtons>
          <KeywordButton>청년월세</KeywordButton>
          <KeywordButton>연금</KeywordButton>
          <KeywordButton>아동복지</KeywordButton>
        </KeywordButtons>
      </Section>
      
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
