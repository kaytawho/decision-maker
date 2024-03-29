import './App.css';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Home } from './components/HomePage';
import { DecideFood } from './components/DecideFoodPage';
import { DecideMusic } from './components/DecideMusicPage';
import theme from './components/Theme';
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

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="/decide-food" element={<DecideFoodPage />}/>
              <Route path="/decide-music" element={<DecideMusicPage />}/>
                <Route path="/decide-movie" element={<DecideMoviePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
          <CssBaseline>
            <AppBar position="static" sx={{ color: 'white'}}>
              <Toolbar sx={{ flexWrap: 'wrap', padding: 3}}>
                  <Typography variant="h4" noWrap sx={{ flexGrow: 1 }}> DECISI🤔N MAKER
                      <Typography variant="h6">Created by <a href="https://github.com/kaytawho" target="_blank">Kayta</a>, 2022</Typography>
                  </Typography>
                  <Button variant="contained" href="/" sx={{ p: 1, m: 1, backgroundColor: '#536DFE' }}>Home</Button>
                    <Button variant="contained" href="/decide-food" sx={{ p: 1, m: 1, backgroundColor: '#536DFE' }}>Eat</Button>
                      <Button variant="contained" href="/decide-music" sx={{ p: 1, m: 1, backgroundColor: '#536DFE' }}>Listen </Button>
                        <Button variant="contained" href="/decide-movie" sx={{ p: 1, m: 1, backgroundColor: '#536DFE' }}>Watch </Button>
              </Toolbar>
            </AppBar>
          <Navigation />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
