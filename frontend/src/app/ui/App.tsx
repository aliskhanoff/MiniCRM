import '@/app/styles/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NotFound, LoginPage } from '@/pages';
import { useAuth, type SharedProps, WithClassName } from '@/shared';
import { GiRollingDices } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const HomePage = ({ className, ...rest }: SharedProps) => {
  return (
    <WithClassName className={className} {...rest}>
      <div className={`flex w-full items-center p-4 bg-slate-100 ${className}`}>
        <Link to="/" className="inline-flex items-center gap-2">
          <GiRollingDices className="inline-block mr-2 text-4xl text-blue-500" />
          <b>Bastenie</b>
        </Link>

        <div className="ml-auto">
          <Link to="/login" className="ml-4 text-blue-500 hover:underline">
            Login
          </Link>

          <Link to="/report-a-problem" className="ml-4 text-blue-500 hover:underline">
            Report a Problem
          </Link>
        </div>
      </div>
    </WithClassName>
  );
};

export function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
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
