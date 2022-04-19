import React from 'react';
import data from './data.json';
import axios from 'axios';

import data from './data.json';

import Checkbox from './components/Checkbox';
import Color from './components/Color';
import Date from './components/Date';
import Datetime from './components/Datetime';
import Email from './components/Email';
import File from './components/File';
import Month from './components/Month';
import Number from './components/Number';
import Password from './components/Password';
import Radio from './components/Radio';
import Range from './components/Range';
import Tel from './components/Tel';
import Text from './components/Text';
import Textarea from './components/Textarea';
import Time from './components/Time';
import Url from './components/Url';
import Week from './components/Week';

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      checkbox: { value: false, isValid: true },
      color: {value: '', isValid: true},
      date: {value: '', isValid: true},
      datetime: {value: '', isValid: true},
      email: {value: '', isValid: true},
      file: {value: '', isValid: true},
      month: {value: '', isValid: true},
      number: {value: '', isValid: true},
      password: {value: '', isValid: true},
      radio: {value: '', isValid: true},
      range: {value: '', isValid: true},
      tel: {value: '', isValid: true},
      text: {value: '', isValid: true},
      textarea: {value: '', isValid: true},
      time: {value: '', isValid: true},
      url: {value: '', isValid: true},
      week: {value: '', isValid: true},
    };
  }

  // Function to update state
  changeState = (inputType, value, isValid) => {
    this.setState({ [inputType]: {
      value: value,
      isValid: isValid
    } });
  }

  handleSubmit = (e) => {
    for (let key in this.state) {
      if (this.state[key].isValid === false) {
        e.preventDefault();
        return;
      }
    }
    
  }

  render() {
    const inputs = data.inputs;
    return (
      <form onSubmit={this.handleSubmit}>
        {
          inputs.map((input,index) => {
            switch (input.type) {
              case 'text': 
                return ( <Text key={index} input={input} changeState={this.changeState}/> );
              case 'password':
                return ( <Password key={index} input={input} changeState={this.changeState}/> );
              case 'email':
                return ( <Email key={index} input={input} changeState={this.changeState}/> );
              case 'radio':
                return ( <Radio key={index} input={input} changeState={this.changeState}/> );
              case 'checkbox':
                return ( <Checkbox key={index} input={input} changeState={this.changeState}/> );
              case 'color':
                return ( <Color key={index} input={input} changeState={this.changeState}/> );
              case 'file':
                return ( <File key={index} input={input} changeState={this.changeState}/> );
              case 'date':
                return ( <Date key={index} input={input} changeState={this.changeState}/> );
              case 'time':
                return ( <Time key={index} input={input} changeState={this.changeState}/> );
              case 'datetime-local':
                return ( <Datetime key={index} input={input} changeState={this.changeState}/> );
              case 'week':
                return ( <Week key={index} input={input} changeState={this.changeState}/> );
              case 'month':
                return ( <Month key={index} input={input} changeState={this.changeState} /> );
              case 'number':
                return ( <Number key={index} input={input} changeState={this.changeState}/> );
              case 'range':
                return ( <Range key={index} input={input} changeState={this.changeState}/> );
              case 'tel':
                return ( <Tel key={index} input={input} changeState={this.changeState}/> );
              case 'url':
                return ( <Url key={index} input={input} changeState={this.changeState} /> );
              case 'textarea':
                return ( <Textarea key={index} input={input} changeState={this.changeState} /> );
            }
          })
        }
        <input type='submit' value='Submit'/>
      </form>
    );
  }
}