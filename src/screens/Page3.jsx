import React from 'react';

// Styled Components (inline으로 구현)
const Container = ({ children, style }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Malgun Gothic, sans-serif',
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0,
    ...style
  }}>
    {children}
  </div>
);

const Header = ({ children }) => (
  <div style={{
    padding: '20px 30px',
    borderBottom: '2px solid #333',
    position: 'relative'
  }}>
    {children}
  </div>
);

const HeaderTitle = ({ children }) => (
  <h1 style={{
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: '2px',
    margin: 0
  }}>
    {children}
  </h1>
);

const MainContainer = ({ children }) => (
  <div style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }}>
    {children}
  </div>
);

const LoginBox = ({ children }) => (
  <div style={{
    textAlign: 'center'
  }}>
    {children}
  </div>
);

const LoginTitle = ({ children }) => (
  <h2 style={{
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '12px',
    letterSpacing: '3px',
    margin: '0 0 12px 0'
  }}>
    {children}
  </h2>
);

const LoginSubtitle = ({ children }) => (
  <p style={{
    fontSize: '16px',
    color: '#666',
    marginBottom: '25px',
    margin: '0 0 25px 0'
  }}>
    {children}
  </p>
);

const GoogleLoginButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7BB379',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 40px',
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
      minWidth: '200px'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#6BA369'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#7BB379'}
  >
    {children}
  </button>
);

const GoogleLogo = () => (
  <div style={{
    width: '20px',
    height: '20px',
    marginRight: '10px',
    background: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4285f4',
    fontWeight: 'bold',
    fontSize: '12px'
  }}>
    G
  </div>
);

const Footer = ({ children }) => (
  <div style={{
    backgroundColor: '#E5E5E5',
    padding: '20px 30px',
    fontSize: '12px',
    color: '#666',
    lineHeight: '1.4'
  }}>
    {children}
  </div>
);

const FooterContent = ({ children }) => (
  <div style={{
    maxWidth: '400px'
  }}>
    {children}
  </div>
);

const FooterLine = ({ children }) => (
  <div style={{
    marginBottom: '3px'
  }}>
    {children}
  </div>
);

// Main Component
const BenefitMapLogin = () => {
  const handleGoogleLogin = () => {
    // Google 로그인 처리 로직
    alert('Google 로그인 기능을 구현해주세요.');
    console.log('Google 로그인 버튼 클릭됨');
  };

  // 엔터 키 처리
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleGoogleLogin();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>BENEFIT MAP</HeaderTitle>
      </Header>

      <MainContainer>
        <LoginBox>
          <LoginTitle>로그인</LoginTitle>
          <LoginSubtitle>놓치기 쉬운 복지 혜택, 맞춤 알림으로 설정하세요.</LoginSubtitle>
          <GoogleLoginButton onClick={handleGoogleLogin}>
            <GoogleLogo />
            Google 계정으로 로그인
          </GoogleLoginButton>
        </LoginBox>
      </MainContainer>

      <Footer>
        <FooterContent>
          <FooterLine>주소: 경기도 안양시 동안구 임곡로 29, 대림대학교 임곡관</FooterLine>
          <FooterLine>전화번호: 010-0000-0000</FooterLine>
          <FooterLine>이메일: XXXX@GMAIL.COM</FooterLine>
          <FooterLine>© 2025 BENEFIT MAP. ALL RIGHTS RESERVED.</FooterLine>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default BenefitMapLogin;