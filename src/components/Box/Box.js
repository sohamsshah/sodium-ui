import React from 'react';

function Box(props){
    const {m = "0", p = "1rem", w, h, color, bgcolor, children, ...rest} = props;

    return (
        <div style={{padding: `${p}`, margin:`${m}`, color: `${color}`, backgroundColor:`${bgcolor}`}} {...rest}>
            {children}
        </div>
    )
}

export default Box;