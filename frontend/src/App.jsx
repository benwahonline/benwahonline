import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Cases from './pages/Cases.jsx';
import Contact from './pages/Contact.jsx';
import Stats from './pages/Stats.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
