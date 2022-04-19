import React from 'react';

export default class Email extends React.Component {

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
    this.props.changeState('color', e.target.value, isvalid);

    if (isvalid)
      this.setState({ text: 'Valid' , color: 'green' });
    else
      this.setState({ text: 'Invalid' , color: 'red' });
  }

  isValid = (val) => {
    // RFC 5322 (https://emailregex.com/)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
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