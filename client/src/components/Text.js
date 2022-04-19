import React from 'react';

export default class Text extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
    this.state = {
      text: '',
      color: ''
    }
  }

  update = (e) => {
    const isvalid = this.isValid(e.target.value, this.d.validation);
    this.props.changeState('text', e.target.value, isvalid);

    if (isvalid)
      this.setState({ text: 'Valid' , color: 'green' });
    else
      this.setState({ text: 'Invalid' , color: 'red' });
  }

  isValid = (val, validation) => {
    if (!validation.upperCaseLetters && val.match(/[A-Z]/g))
      return false;
    if (!validation.lowerCaseLetters && val.match(/[a-z]/g))
      return false;
    if (!validation.numbers && val.match(/[0-9]/g))
      return false;
    if (validation.minLength && val.length < validation.minLength)
      return false;
    if (validation.maxLength && val.length > validation.maxLength)
      return false;
    if (val.match(new RegExp("[^a-zA-Z0-9" + validation.specialChars.join("") + "]", "g")))
      return false;
    return true;
  }

  render() {
    const d = this.d;
    return (
      <div className='inputDiv'>
        <label>{d.label}</label>
        <input 
          type={d.type} 
          name={d.name} 
          required={d.required} 
          placeholder={d.placeholder} 
          onChange={e => this.update(e)}
        />
        <span className='isValidText' style={{color: this.state.color}}>{this.state.text}</span>
      </div>
    );
  }
}