import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import Page6 from './screens/Page6';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
