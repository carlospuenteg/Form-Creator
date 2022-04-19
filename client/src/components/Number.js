import React from 'react';

export default class Number extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
  }

  update = (e) => {
    this.props.changeState('number', e.target.value, true);
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
          min={d.min}
          max={d.max}
          step={d.step}
          onChange={e => this.update(e)}
        />
      </div>
    );
  }
}