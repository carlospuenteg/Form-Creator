import React from 'react';

export default class Url extends React.Component {

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
    this.props.updateValidation(isvalid, 'url');

    if (isvalid)
      this.setState({ text: 'Valid' , color: 'green' });
    else
      this.setState({ text: 'Invalid' , color: 'red' });
  }

  isValid = (val) => {
    const re = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/g;
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