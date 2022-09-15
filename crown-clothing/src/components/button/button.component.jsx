/**
 * 
 * 3 Types of buttons:
 * - default button.
 * - Secondary/Inverted button.
 * - Google Sign in button.
 */

import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  'secondary': 'secondary',
  'google': 'google-sign-in'
}

const button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      { children }
    </button>
  )
};

export default button;