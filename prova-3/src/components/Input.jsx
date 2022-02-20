import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  render() {
    const { inputName,
      inputLabel,
      inputType,
      inputId,
      inputValue,
      inputChecked,
      inputHtmlFor,
      inputOnChange,
      inputPlaceholder,
      inputClass,
      inputStep,
    } = this.props;

    return (
      <label htmlFor={ inputHtmlFor }>
        { inputLabel }
        <input className={ inputClass }
          id={ inputHtmlFor }
          data-testid={ inputId }
          name={ inputName }
          type={ inputType }
          value={ inputValue }
          checked={ inputChecked }
          onChange={ inputOnChange }
          placeholder={ inputPlaceholder }
          step={ inputStep}
        />
      </label>
    );
  }
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputHtmlFor: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputChecked: PropTypes.bool,
  inputOnChange: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputStep: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
};

Input.defaultProps = {
  inputValue: '',
  inputChecked: false,
  inputStep: '',
  inputClass: '',
};

export default Input;