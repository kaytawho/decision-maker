import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Home } from './components/HomePage';
import { DecideFood } from './components/DecideFoodPage';
import { DecideMusic } from './components/DecideMusicPage';
import theme from './components/Theme';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { DecideMovie } from './components/DecideMoviePage';




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

function DecideMoviePage() {
  return (
    <div>
      <DecideMovie />
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
                <Route path="/decide-movie" element={<DecideMoviePage />}/>
              </Routes>
          </BrowserRouter>
        </CssBaseline>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
