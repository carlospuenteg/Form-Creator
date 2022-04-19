import React from 'react';

export default class Tel extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
    this.state = {
      text: '',
      color: ''
    }
  }

  validate = (e) => {
    const isvalid = this.isValid(e.target.value, this.d.validation);
    this.props.updateValidation(isvalid, 'tel');

    if (isvalid)
      this.setState({ text: 'Valid' , color: 'green' });
    else
      this.setState({ text: 'Invalid' , color: 'red' });
  }

  isValid = (val) => {
    const re = /^\+(?:[0-9] ?){6,14}[0-9]$/g;
    return re.test(val);
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