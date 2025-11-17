import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App(){
  return (
    <BrowserRouter>
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
