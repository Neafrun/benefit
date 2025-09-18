import React from 'react';

const TestPage = () => {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      backgroundColor: 'lightblue',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      <h1>테스트 페이지입니다!</h1>
      <p>이 페이지가 보인다면 라우팅이 정상적으로 작동하고 있습니다.</p>
    </div>
  );
};

export default TestPage;
