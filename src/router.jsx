// src/router.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import PortfolioPage from './pages/PortfolioPage';
// import BlogPage from './pages/BlogPage';
// import ContactPage from './pages/ContactPage';
// import FAQPage from './pages/FAQPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* <Route path="/services" element={<ServicesPage />} /> */}
                {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
                {/* <Route path="/blog" element={<BlogPage />} /> */}
                {/* <Route path="/contact" element={<ContactPage />} /> */}
                {/* <Route path="/faq" element={<FAQPage />} /> */}
            </Routes>
        </Router>
    );
}

export default AppRouter;
