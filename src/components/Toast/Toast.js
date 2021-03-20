import React from "react"
import Typography from "./../Typography/Typography"

import "./Toast.css"

const Header = ({children, ...rest}) => {
    return(
        <div className="na-toast-header" {...rest}>
            <Typography variant="h6"style={{fontWeight: "bold"}}>
            {children}
            </Typography>
            <button className="na-toast-dismiss">×</button>
            
            
        </div>
    )
}

const Body = ({children, ...rest}) => {
    return(
        <div className="na-toast-body" {...rest}>
            <Typography variant="body1">
            {children}
            </Typography>
        </div>
    )
}

export default function Toast(props){
    const {show, children, ...rest} = props;
    let visibility;
    (show)?(visibility = "show"):(visibility="hide")
    return(
        <div className={`na-toast na-toast-${visibility}`} {...rest}>
            {children}
        </div>
    )
}

Toast.Header = Header;
Toast.Body = Body;