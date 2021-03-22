import React from 'react';
import "./Input.css";

function Input({size="medium" , variant = "standard", children, ...rest}){
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

