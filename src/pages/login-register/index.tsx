import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../redux/app/hooks';

import LoginRegisterPage from '../../containers/LoginRegister';

export default function LoginRegister() {
  const router = useRouter();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  return <LoginRegisterPage />;
}
