import React from 'react';

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.d = this.props.input;
  }

  render() {
    const d = this.d;
    const labelStyle = {
      display: 'block',
      marginBottom: "1vh"
    }
    return (
      <div className='inputDiv'>
        <label style={labelStyle}>{d.label}</label>
        <textarea 
          name={d.name} 
          required={d.required} 
          rows={d.rows} 
          cols={d.cols} 
          maxLength={d.maxLength} 
          onChange={e => this.update(e)}
          placeholder={d.placeholder}>
        </textarea>
      </div>
    );
  }
}