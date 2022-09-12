import { signInWithGooglePopup } from '../../services/firebase/firebase.service';

const Login = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={logGoogleUser}>Sign in With Google PopUp</button>
    </div>
  );
};

export default Login;