import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigation = useRouter();

  useEffect(() => {
    const isLoggedIn = false; // Replace this with your authentication check
    const currentPath = window.location.pathname;
    const isShoppingCartPage = currentPath === '/shoppingcart';

    if (!isLoggedIn && isShoppingCartPage) {
      navigation.push('/registration');
    }

    return () => {
      // Cleanup logic if needed
    };
  }, [navigation]); // Include navigation in the dependency array

  return <>{children}</>;
};

export default ProtectedRoute;
