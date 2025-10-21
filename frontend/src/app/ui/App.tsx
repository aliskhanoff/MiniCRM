import '@/app/styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound, LoginPage } from '@/pages';
import { useAuth } from '@/shared';

const HomePage = () => {
  return <div className="p-4">Home Page</div>;
};

export function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
