import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Home } from './components/HomePage';
import { DecideFood } from './components/DecideFoodPage';
import { DecideMusic } from './components/DecideMusicPage';
import theme from './components/Theme';
import { Navigation } from './components/Navigation';
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
              {/* <nav>
                  <ul>
                      <li>
                      <Link to="/">Home</Link>
                      </li>
                      <li>
                      <Link to="/decide-food">About</Link>
                      </li>
                      <li>
                      <Link to="/decide-music">Login</Link>
                      </li>
                  </ul>
              </nav> */}
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/decide-food" element={<DecideFoodPage />}/>
                <Route path="/decide-music" element={<DecideMusicPage />}/>
                <Route path="/decide-movie" element={<DecideMoviePage />}/>
              </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
