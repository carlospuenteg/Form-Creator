import React from 'react';

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
  }

  update = (e) => {
    this.props.changeState('checkbox', e.target.value, true);
  }

  render() {
    const d = this.d;
    return (
      <div className='inputDiv'>
        <input 
          type={d.type} 
          name={d.name} 
          onChange={e => this.update(e)}
        />
        <label> {d.label}</label>
      </div>
    );
  }
}