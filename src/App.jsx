import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SEO from './components/SEO';
import ChatWidget from './components/ChatWidget';

function App(){
  return (
    <BrowserRouter>
      <SEO kind="page" slug="home" fallback={{ title: 'Aureum Developments | Luxury Real Estate & Construction in Mexico', description: 'Premium developments, high-end construction, and bespoke services across Mexico.' }} />
      <ChatWidget />
      <Routes>
        <Route element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:slug" element={<PropertyDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
