import React from 'react';

export default class Color extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
  }

  update = (e) => {
    this.props.changeState('color', e.target.value, true);
  }

  render() {
    const d = this.d;
    return (
      <div className='inputDiv'>
        <label> {d.label}</label>
        <input 
          type={d.type} 
          name={d.name}
          onChange={e => this.update(e)}
        />
      </div>
    );
  }
}