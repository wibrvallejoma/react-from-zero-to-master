// Alternative to Google PopUp. Google Redirect, it is more complex tho.
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from '../../services/firebase/firebase.service';

const Login = () => {
  // If useEffect gets an empty array, it will render only once.
  useEffect(() => async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocFromAuth(response.user);
    }
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGoogleRedirect}>Sign in With Google Redirect</button>
    </div>
  );
};

export default Login;