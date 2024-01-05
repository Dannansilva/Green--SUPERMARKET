// components/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ReactNode } from 'react';


interface ProtectedRouteProps {
    children: ReactNode;
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = false; // authentication check
    
        if (!isLoggedIn) {
          router.push('/login');
        }
    
       
        return () => {
        };
      }, []); 
      return <>
      {children}
     

      </>;
    };
    
    export default ProtectedRoute;