import React from 'react';
import "./Button.css"
function Button(props){
    const {variant = "primary", kind="filled", children, ...rest} = props;
    return (
        <button className={`na-button na-${variant} na-${kind}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;