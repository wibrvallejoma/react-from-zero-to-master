import {
  signInWithGooglePopup,
  createUserDocFromAuth
} from '../../services/firebase/firebase.service';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Sign in With Google PopUp</button>
      <SignUpForm />
    </div>
  );
};

export default Login;