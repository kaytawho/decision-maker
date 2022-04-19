import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DecideFood } from './components/DecideFoodPage';
import { Home } from './components/HomePage';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme'
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { DecideMusic } from './components/DecideMusicPage';



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

function DecideMusicPage() {
  return (
    <div>
      <DecideMusic />
    </div>
  );
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <CssBaseline>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/decide-food" element={<DecideFoodPage />}/>
                <Route path="/decide-music" element={<DecideMusicPage />}/>
              </Routes>
          </BrowserRouter>
        </CssBaseline>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
