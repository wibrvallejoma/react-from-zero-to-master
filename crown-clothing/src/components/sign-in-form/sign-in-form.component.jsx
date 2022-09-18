import { useState, useContext } from 'react';

// Services
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../services/firebase/firebase.service';

// Components
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

// Contexts
import { UserContext } from '../../contexts/user.context';

// Styles
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // Handles submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle Sign in
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      // Generalize errors, more secured.
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        alert("Incorrect email or password.");
      } else {
        console.log(error);
      }
    }
  };

  // Handles change for each input
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use spread operator to only update the given inputs/values.
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    await createUserDocFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className='buttons-container'>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  )
};

export default SignInForm;