import { useState, useContext } from 'react';

// Services
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../services/firebase/firebase.service';

// Components
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

// Contexts
import { UserContext } from '../../contexts/user.context';

// Styles
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // Handles submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      setCurrentUser(user);

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use.');
      } else {
        console.log('User creation encountered an error:', error);
      }
    }
  };

  // Handles change for each input
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use spread operator to only update the given inputs/values.
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
};

export default SignUpForm;