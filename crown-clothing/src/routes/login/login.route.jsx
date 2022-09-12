import {
  signInWithGooglePopup,
  createUserDocFromAuth
} from '../../services/firebase/firebase.service';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Sign in With Google PopUp</button>
    </div>
  );
};

export default Login;