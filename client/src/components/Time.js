import React from 'react';

export default class Time extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
  }

  render() {
    const d = this.d;
    return (
      <div className='inputDiv'>
        <label> {d.label}</label>
        <input 
          type={d.type} 
          name={d.name}
          required={d.required}
          onChange={e => this.update(e)}
        />
      </div>
    );
  }
}