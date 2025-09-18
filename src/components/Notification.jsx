import React, { useState } from 'react';
import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegBell, FaRegBellSlash } from 'react-icons/fa';

const NotificationContainer = styled.div`
  position: absolute;
  top: 70px; /* 헤더 바로 아래에 위치 */
  right: 20px;
  width: 350px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #eee;
  z-index: 1000;
  overflow: hidden;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 15px;
  background-color: ${props => (props.active ? '#7DB249' : 'white')};
  color: ${props => (props.active ? 'white' : '#555')};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:first-child {
    border-right: 1px solid #eee;
  }
`;

const NotificationList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const NotificationItem = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotificationDate = styled.span`
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
`;

const NotificationText = styled.span`
  font-size: 15px;
  color: #333;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  width: 120px;
  overflow: hidden;
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  background: none;
  border: none;
  padding: 10px 15px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f5f5f5;
  }
`;


const Notification = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [openMenu, setOpenMenu] = useState(null); // 어떤 알림의 메뉴가 열렸는지 추적

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  
  // 임시 데이터
  const notifications = [
    { id: 1, date: '2025-06-25', text: '청년 자립 복지 신청일 입니다!' },
    { id: 2, date: '2025-06-25', text: '청년 자립 복지 신청일 입니다!' },
    { id: 3, date: '2025-06-25', text: '청년 자립 복지 신청일 입니다!' },
  ];

  return (
    <NotificationContainer>
      <Tabs>
        <TabButton active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')}>
          알림
        </TabButton>
        <TabButton active={activeTab === 'trash'} onClick={() => setActiveTab('trash')}>
          휴지통
        </TabButton>
      </Tabs>
      <NotificationList>
        {activeTab === 'notifications' && notifications.map((item, index) => (
          <NotificationItem key={item.id}>
            <NotificationContent>
              <NotificationDate>[{item.date}]</NotificationDate>
              <NotificationText>{item.text}</NotificationText>
            </NotificationContent>
            <MoreButton onClick={() => toggleMenu(index)}>
              <BsThreeDotsVertical />
              {openMenu === index && (
                <DropdownMenu>
                  <DropdownItem>
                    <FaRegBell /> 알림 삭제
                  </DropdownItem>
                  <DropdownItem>
                    <FaRegBellSlash /> 알림 숨기기
                  </DropdownItem>
                </DropdownMenu>
              )}
            </MoreButton>
          </NotificationItem>
        ))}
        {activeTab === 'trash' && (
          <NotificationItem>
            <NotificationContent>
              <NotificationText>휴지통은 비어있습니다.</NotificationText>
            </NotificationContent>
          </NotificationItem>
        )}
      </NotificationList>
    </NotificationContainer>
  );
};

export default Notification;
