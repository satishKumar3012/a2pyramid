// src/components/PrivateRoute.jsx
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }) => {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await fetch('https://a2pyramid.com/auth/verify-token', {
          method: 'GET',
          credentials: 'include', // Include cookies in request
        });

        const data = await res.json();
        setAllowed(data.valid);
      } catch {
        setAllowed(false);
      }
    };

    checkToken();
  }, []);

  if (allowed === null) return <p>Checking authentication...</p>;
  if (!allowed) {
    window.location.href = 'https://portal.a2pyramid.com';
    return null;
  }

  return children;
};

export default PrivateRoute;