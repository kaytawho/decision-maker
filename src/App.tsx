import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { DecideFood } from './components/DecideFoodPage';
import { Home } from './components/HomePage';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme'

function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}

function DecideFoodPage() {
  return (
    <div>
      <DecideFood />
    </div>
  );
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/decide-food">DECIDE WHAT TO COOK</NavLink>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/decide-food" element={<DecideFoodPage />}/>
              </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
