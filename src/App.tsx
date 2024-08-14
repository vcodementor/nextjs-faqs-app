import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FAQPage from './pages/Faqs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/faq" />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;