import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
  position: relative;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 50%;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

const CalendarTitle = styled.h1`
  font-size: 28px;
  margin: 0 30px;
  color: #333;
  font-weight: 600;
`;

const EditButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  z-index: 100;
  
  &:hover {
    background-color: #45a049;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  }
`;

const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 3px solid #333;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const CalendarHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f1f3f4;
  border-bottom: 3px solid #333;
`;

const DayHeader = styled.div`
  padding: 15px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: ${props => 
    props.day === '일' ? '#e53e3e' : 
    props.day === '토' ? '#3182ce' : '#333'};
  border-right: 1px solid #ccc;
  
  &:last-child {
    border-right: none;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 120px);
`;

const DateCell = styled.div`
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  padding: 8px;
  min-height: 120px;
  background-color: ${props => props.isOtherMonth ? '#f8f8f8' : 'white'};
  
  &:nth-child(7n) {
    border-right: none;
  }
  
  &:nth-last-child(-n+7) {
    border-bottom: none;
  }
`;

const DateNumber = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => 
    props.isOtherMonth ? '#bbb' :
    props.isHoliday ? '#e53e3e' :
    props.isSunday ? '#e53e3e' : 
    props.isSaturday ? '#3182ce' : '#333'};
  margin-bottom: 6px;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  
  ${props => props.isToday && `
    &::after {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      right: -3px;
      bottom: -3px;
      border: 2px solid #e53e3e;
      border-radius: 50%;
      background-color: rgba(229, 62, 62, 0.1);
    }
  `}
`;

const HolidayText = styled.div`
  font-size: 11px;
  color: #e53e3e;
  margin-top: 3px;
  font-weight: 500;
`;

const WelfareBar = styled.div`
  background-color: #4CAF50;
  height: 18px;
  border-radius: 9px;
  margin: 3px 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 11px;
  color: white;
  font-weight: 600;
  position: absolute;
  left: 8px;
  cursor: ${props => props.editMode ? 'pointer' : 'default'};
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.editMode ? '#45a049' : '#4CAF50'};
    transform: ${props => props.editMode ? 'translateY(-1px)' : 'none'};
  }
  
  &.welfare1 {
    top: 50px;
    right: 8px;
  }
  
  &.welfare2 {
    top: 75px;
    right: 8px;
  }
  
  &.welfare3 {
    top: 100px;
    right: 8px;
  }
`;

const MultiDayWelfare = styled.div`
  background-color: #4CAF50;
  height: 18px;
  border-radius: 9px;
  margin: 3px 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 11px;
  color: white;
  font-weight: 600;
  position: absolute;
  left: 8px;
  z-index: 1;
  cursor: ${props => props.editMode ? 'pointer' : 'default'};
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.editMode ? '#45a049' : '#4CAF50'};
    transform: ${props => props.editMode ? 'translateY(-1px)' : 'none'};
  }
  
  &.span-2 {
    width: calc(200% + 20px);
  }
  
  &.span-3 {
    width: calc(300% + 40px);
  }
  
  &.span-4 {
    width: calc(400% + 60px);
  }
  
  &.span-5 {
    width: calc(500% + 80px);
  }
  
  &.span-6 {
    width: calc(600% + 100px);
  }
  
  &.span-7 {
    width: calc(700% + 120px);
  }
  
  &.welfare1 {
    top: 50px;
  }
  
  &.welfare2 {
    top: 75px;
  }
  
  &.welfare3 {
    top: 100px;
  }
`;

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #4CAF50;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 450px;
  width: 90%;
  text-align: center;
  border: 3px solid #45a049;
`;

const ModalTitle = styled.h3`
  margin: 0 0 30px 0;
  color: white;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 25px;
`;

const ModalButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  min-width: 80px;
  
  &.delete {
    background-color: white;
    color: #4CAF50;
    
    &:hover {
      background-color: #f5f5f5;
      transform: translateY(-2px);
    }
  }
  
  &.cancel {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
  }
`;

const Page4 = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const [welfareServices, setWelfareServices] = useState({
    '2025-9-12': [{ id: 1, text: '청년주택신청', span: 7 }],
    '2025-5-15': [{ id: 2, text: '생계급여 신청' }],
    '2025-6-1': [{ id: 3, text: '청년수당 접수', span: 10 }],
    '2025-7-20': [{ id: 4, text: '의료급여 신청', span: 5 }],
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedWelfare, setSelectedWelfare] = useState(null);
  
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const monthNames = [
    '1월', '2월', '3월', '4월', '5월', '6월',
    '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  // 2020-2030년 한국 공휴일 데이터
  const holidays = {
    // 2020년
    '2020-1-1': '신정', '2020-1-24': '설날연휴', '2020-1-25': '설날연휴', '2020-1-26': '설날', '2020-1-27': '설날연휴',
    '2020-3-1': '삼일절', '2020-4-30': '부처님오신날', '2020-5-5': '어린이날', '2020-6-6': '현충일',
    '2020-8-15': '광복절', '2020-9-30': '추석연휴', '2020-10-1': '추석', '2020-10-2': '추석연휴',
    '2020-10-3': '개천절', '2020-10-9': '한글날', '2020-12-25': '크리스마스',

    // 2021년
    '2021-1-1': '신정', '2021-2-11': '설날연휴', '2021-2-12': '설날', '2021-2-13': '설날연휴',
    '2021-3-1': '삼일절', '2021-5-5': '어린이날', '2021-5-19': '부처님오신날', '2021-6-6': '현충일',
    '2021-8-15': '광복절', '2021-9-20': '추석연휴', '2021-9-21': '추석', '2021-9-22': '추석연휴',
    '2021-10-3': '개천절', '2021-10-9': '한글날', '2021-12-25': '크리스마스',

    // 2022년
    '2022-1-1': '신정', '2022-1-31': '설날연휴', '2022-2-1': '설날', '2022-2-2': '설날연휴',
    '2022-3-1': '삼일절', '2022-5-5': '어린이날', '2022-5-8': '부처님오신날', '2022-6-6': '현충일',
    '2022-8-15': '광복절', '2022-9-9': '추석연휴', '2022-9-10': '추석연휴', '2022-9-11': '추석', '2022-9-12': '추석연휴',
    '2022-10-3': '개천절', '2022-10-9': '한글날', '2022-12-25': '크리스마스',

    // 2023년
    '2023-1-1': '신정', '2023-1-21': '설날연휴', '2023-1-22': '설날', '2023-1-23': '설날연휴', '2023-1-24': '설날연휴',
    '2023-3-1': '삼일절', '2023-5-5': '어린이날', '2023-5-27': '부처님오신날', '2023-6-6': '현충일',
    '2023-8-15': '광복절', '2023-9-28': '추석연휴', '2023-9-29': '추석', '2023-9-30': '추석연휴',
    '2023-10-3': '개천절', '2023-10-9': '한글날', '2023-12-25': '크리스마스',

    // 2024년
    '2024-1-1': '신정', '2024-2-9': '설날연휴', '2024-2-10': '설날연휴', '2024-2-11': '설날', '2024-2-12': '설날연휴',
    '2024-3-1': '삼일절', '2024-4-10': '국회의원선거일', '2024-5-5': '어린이날', '2024-5-15': '부처님오신날', '2024-6-6': '현충일',
    '2024-8-15': '광복절', '2024-9-16': '추석연휴', '2024-9-17': '추석', '2024-9-18': '추석연휴',
    '2024-10-3': '개천절', '2024-10-9': '한글날', '2024-12-25': '크리스마스',

    // 2025년
    '2025-1-1': '신정', '2025-1-28': '설날연휴', '2025-1-29': '설날', '2025-1-30': '설날연휴',
    '2025-3-1': '삼일절', '2025-5-5': '어린이날', '2025-5-13': '부처님오신날', '2025-6-6': '현충일',
    '2025-8-15': '광복절', '2025-10-5': '추석연휴', '2025-10-6': '추석', '2025-10-7': '추석연휴', '2025-10-8': '추석연휴',
    '2025-10-3': '개천절', '2025-10-9': '한글날', '2025-12-25': '크리스마스',

    // 2026년
    '2026-1-1': '신정', '2026-2-16': '설날연휴', '2026-2-17': '설날', '2026-2-18': '설날연휴',
    '2026-3-1': '삼일절', '2026-5-5': '어린이날', '2026-5-2': '부처님오신날', '2026-6-6': '현충일',
    '2026-8-15': '광복절', '2026-9-24': '추석연휴', '2026-9-25': '추석', '2026-9-26': '추석연휴',
    '2026-10-3': '개천절', '2026-10-9': '한글날', '2026-12-25': '크리스마스',

    // 2027년
    '2027-1-1': '신정', '2027-2-6': '설날연휴', '2027-2-7': '설날', '2027-2-8': '설날연휴',
    '2027-3-1': '삼일절', '2027-5-5': '어린이날', '2027-5-21': '부처님오신날', '2027-6-6': '현충일',
    '2027-8-15': '광복절', '2027-10-14': '추석연휴', '2027-10-15': '추석', '2027-10-16': '추석연휴',
    '2027-10-3': '개천절', '2027-10-9': '한글날', '2027-12-25': '크리스마스',

    // 2028년
    '2028-1-1': '신정', '2028-1-26': '설날연휴', '2028-1-27': '설날', '2028-1-28': '설날연휴',
    '2028-3-1': '삼일절', '2028-5-5': '어린이날', '2028-5-10': '부처님오신날', '2028-6-6': '현충일',
    '2028-8-15': '광복절', '2028-10-2': '추석연휴', '2028-10-3': '추석', '2028-10-4': '추석연휴',
    '2028-10-9': '한글날', '2028-12-25': '크리스마스',

    // 2029년
    '2029-1-1': '신정', '2029-2-12': '설날연휴', '2029-2-13': '설날', '2029-2-14': '설날연휴',
    '2029-3-1': '삼일절', '2029-5-5': '어린이날', '2029-5-28': '부처님오신날', '2029-6-6': '현충일',
    '2029-8-15': '광복절', '2029-9-21': '추석연휴', '2029-9-22': '추석', '2029-9-23': '추석연휴',
    '2029-10-3': '개천절', '2029-10-9': '한글날', '2029-12-25': '크리스마스',

    // 2030년
    '2030-1-1': '신정', '2030-2-2': '설날연휴', '2030-2-3': '설날', '2030-2-4': '설날연휴',
    '2030-3-1': '삼일절', '2030-5-5': '어린이날', '2030-5-17': '부처님오신날', '2030-6-6': '현충일',
    '2030-8-15': '광복절', '2030-9-11': '추석연휴', '2030-9-12': '추석', '2030-9-13': '추석연휴',
    '2030-10-3': '개천절', '2030-10-9': '한글날', '2030-12-25': '크리스마스'
  };

  // 오늘 날짜
  const today = new Date();
  const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  // 년도/월 변경 함수
  const changeMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };
  
  // 복지 서비스 삭제 함수
  const deleteWelfareService = (dateKey, serviceId) => {
    setWelfareServices(prevServices => {
      const newServices = { ...prevServices };
      if (newServices[dateKey]) {
        newServices[dateKey] = newServices[dateKey].filter(service => service.id !== serviceId);
        if (newServices[dateKey].length === 0) {
          delete newServices[dateKey];
        }
      }
      return newServices;
    });
    setShowModal(false);
    setSelectedWelfare(null);
  };
  
  // 복지 서비스 클릭 핸들러
  const handleWelfareClick = (welfare, dateKey) => {
    if (editMode) {
      setSelectedWelfare({ ...welfare, dateKey });
      setShowModal(true);
    }
  };
  
  // 캘린더 데이터 생성 함수
  const generateCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // 해당 월의 첫 번째 날과 마지막 날
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // 첫 번째 날의 요일 (0=일요일, 6=토요일)
    const firstDayOfWeek = firstDay.getDay();
    
    // 해당 월의 날짜 수
    const daysInMonth = lastDay.getDate();
    
    // 캘린더 데이터 생성
    const calendarData = [];
    
    // 이전 달의 빈 날짜들 (숨김 처리)
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarData.push({ 
        date: '', 
        isOtherMonth: true,
        services: []
      });
    }
    
    // 해당 월의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${month + 1}-${day}`;
      const dayServices = welfareServices[dateKey] || [];
      
      calendarData.push({ 
        date: day, 
        isOtherMonth: false,
        services: dayServices.map((service, index) => ({
          ...service,
          class: `welfare${(index % 3) + 1}`
        }))
      });
    }
    
    // 다음 달의 날짜들 (5주로 제한)
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const remainingCells = 35 - calendarData.length; // 5주 = 35개 셀
    
    for (let day = 1; day <= remainingCells; day++) {
      const dateKey = `${nextYear}-${nextMonth + 1}-${day}`;
      const dayServices = welfareServices[dateKey] || [];
      
      calendarData.push({ 
        date: day, 
        isOtherMonth: true,
        services: dayServices.map((service, index) => ({
          ...service,
          class: `welfare${(index % 3) + 1}`
        }))
      });
    }
    
    return calendarData;
  };
  
  const calendarData = generateCalendarData();

  return (
    <Container>
      <CalendarHeader>
        <NavigationButton onClick={() => changeMonth('prev')}>
          ◀
        </NavigationButton>
        <CalendarTitle>
          {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
        </CalendarTitle>
        <NavigationButton onClick={() => changeMonth('next')}>
          ▶
        </NavigationButton>
        <EditButton onClick={() => setEditMode(!editMode)}>
          {editMode ? '편집 완료' : '캘린더 수정'}
        </EditButton>
      </CalendarHeader>
      <CalendarWrapper>
        <CalendarHeaderGrid>
          {daysOfWeek.map((day, index) => (
            <DayHeader key={index} day={day}>{day}</DayHeader>
          ))}
        </CalendarHeaderGrid>
        <CalendarGrid>
          {calendarData.map((cell, index) => {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const actualYear = cell.isOtherMonth ? 
              (index < 7 ? (month === 1 ? year - 1 : year) : (month === 12 ? year + 1 : year)) : 
              year;
            const actualMonth = cell.isOtherMonth ? 
              (index < 7 ? (month === 1 ? 12 : month - 1) : (month === 12 ? 1 : month + 1)) : 
              month;
            const dateKey = `${actualYear}-${actualMonth}-${cell.date}`;
            
            // 요일 계산 (0=일요일, 6=토요일)
            const dayOfWeek = index % 7;
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;
            
            // 공휴일 체크
            const holidayName = holidays[dateKey];
            const isHoliday = !!holidayName;
            
            // 오늘 날짜 체크
            const isToday = dateKey === todayString;
            
            return (
              <DateCell key={index} isOtherMonth={cell.isOtherMonth}>
                <DateNumber 
                  isSunday={isSunday} 
                  isSaturday={isSaturday}
                  isHoliday={isHoliday}
                  isToday={isToday}
                  isOtherMonth={cell.isOtherMonth}
                >
                  {cell.date}
                </DateNumber>
                {holidayName && !cell.isOtherMonth && <HolidayText>{holidayName}</HolidayText>}
                {cell.services.map((service, serviceIndex) => (
                  service.span ? (
                    <MultiDayWelfare 
                      key={serviceIndex} 
                      className={`${service.class} span-${service.span}`}
                      editMode={editMode}
                      onClick={() => handleWelfareClick(service, dateKey)}
                    >
                      {service.text}
                    </MultiDayWelfare>
                  ) : (
                    <WelfareBar 
                      key={serviceIndex} 
                      className={service.class}
                      editMode={editMode}
                      onClick={() => handleWelfareClick(service, dateKey)}
                    >
                      {service.text}
                    </WelfareBar>
                  )
                ))}
              </DateCell>
            );
          })}
        </CalendarGrid>
      </CalendarWrapper>
      
      {showModal && selectedWelfare && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>
              {selectedWelfare.text} 서비스를<br />삭제하시겠습니까?
            </ModalTitle>
            <ModalButtons>
              <ModalButton 
                className="cancel"
                onClick={() => {
                  setShowModal(false);
                  setSelectedWelfare(null);
                }}
              >
                취소
              </ModalButton>
              <ModalButton 
                className="delete"
                onClick={() => deleteWelfareService(selectedWelfare.dateKey, selectedWelfare.id)}
              >
                삭제
              </ModalButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Page4;