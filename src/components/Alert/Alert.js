import React from "react"

const DismissibleAlert = ({children, ...rest}) => {
    return(<div {...rest}>{children}</div>)
}

const SimpleAlert = ({children, ...rest}) => {
    return(<div {...rest}>{children}</div>)
}

export default function Alert(props){
    const {variant, dismissible, show, children, ...rest} = props;
    let display;
    
    (show)?(display="block"):(display="none");
    {console.log(display)}
    return(
        (dismissible)?(<DismissibleAlert style={{display:`${display}`}} {...rest}>{children}</DismissibleAlert>):(<SimpleAlert style={{display:`${display}`}} {...rest}>{children}</SimpleAlert>)
    )
}