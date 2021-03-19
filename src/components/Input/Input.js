import React from 'react';
import "./Input.css";

function Input(props){
    const {size="medium" , variant = "standard", children, ...rest} = props;
    return (
    <div className="group" {...rest}>      
      <input className={`${size} ${variant}`} type="text" required />
      <span class="highlight"></span>
      <span className={`${size} bar`}></span>
      <label className={`${variant}-label`}>{children}</label>
    </div>

    )
}

export default Input;

