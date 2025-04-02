
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import Brief from './pages/Brief';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Chat from './pages/Chat';
import Client from './pages/Client';
import Company from './pages/Company';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/toaster';
import { CapabilitiesProvider } from './context/CapabilitiesContext';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CapabilitiesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/brief" element={<Brief />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/client/:id" element={<Client />} />
              <Route path="/company/:id" element={<Company />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <CookieConsent />
          <Toaster />
        </CapabilitiesProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
