import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigation = useRouter();

  useEffect(() => {
    const isLoggedIn = true; // authentication check
    const currentPath = window.location.pathname;
    const isShoppingCartPage = currentPath === '/shoppingcart';

    if (!isLoggedIn && isShoppingCartPage) {
      navigation.push('/registration');
    }

    return () => {

    };
  }, [navigation]); 

  return <>{children}</>;
};

export default ProtectedRoute;
