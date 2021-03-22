import React from 'react';
import "./Button.css"

export default function Button(props){
    const {variant = "default", kind="filled", children, ...rest} = props;
    return (
        <button className={`na-button na-${variant} na-${kind}`} {...rest}>
            {children}
        </button>
    )
}
