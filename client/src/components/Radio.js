import React from 'react';

export default class Radio extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
  }

  update = (e) => {
    this.props.changeState('radio', e.target.value, true);
  }

  render() {
    const d = this.d;
    return (
      <div className='inputDiv'>
        <label>{d.label}</label>
        {
          d.options.map((op, index) => {
            return (
              <label key={index}>
                <input 
                  type={d.type} 
                  name={d.name} 
                  value={op.value} 
                  onChange={e => this.update(e)}
                /> {op.label}
              </label>
            );
          })
        }
      </div>
    );
  }
}