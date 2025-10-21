import { useEffect, useState } from 'react';
import axios from 'axios';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    axios
      .get('http://localhost:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        setIsAuthenticated(true);
        setUser(res.data);
      })

      .catch((err) => {
        console.warn('Invalid token:', err);
        setIsAuthenticated(false);
        localStorage.removeItem('jwt');
      });
  }, []);

  return { isAuthenticated, user };
}
