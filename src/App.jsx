import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import Page1 from './screens/Page1';
import ServicePage from './screens/ServicePage';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import Page6 from './screens/Page6';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ 
          backgroundColor: '#333',
          color: 'white',
          padding: '1rem 2rem',
          textAlign: 'center'
        }}>
          <h1>My Website</h1>
        </div>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/ServicePage" element={<ServicePage />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
          </Routes>
        </main>
        <div style={{ 
          backgroundColor: '#333',
          color: 'white',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
