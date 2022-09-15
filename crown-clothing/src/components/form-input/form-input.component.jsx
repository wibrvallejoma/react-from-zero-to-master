import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  // If label exists, render label html and its class.
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length > 0 ? 'shrink' : ''
          } form-input-label `}
        >{ label }</label>
      )}
    </div>
  );
};

export default FormInput;