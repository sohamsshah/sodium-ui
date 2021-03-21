import React from "react"
import "./List.css"

const Item =({active=false, disabled=false, children, ...rest}) => {
    let activeClass;
    let disabledClass;
    (active)?(activeClass="active"):(activeClass="inactive");
    (disabled)?(disabledClass="disabled"):(disabledClass="able");

    return(
        <li className={`na-list-item na-list-item-${activeClass} na-list-item-${disabledClass}`} {...rest}>
            {children}
        </li>
    )
}
export default function List({ variant, children, ...rest}){
    
    return(
        (variant==="flush")?(
        <ul className={`na-list-group na-list-group-flush`} {...rest}>
            {children}
        </ul>):(<ul className={`na-list-group`} {...rest}>
            {children}
        </ul>)
        
    )
}

List.Item = Item