import React from "react";
import "./Typography.css"


export default function Typography(props){
    const {variant="body1", display="initial", align="inherit", children, ...rest} = props;
    return(
        {
            "h1": <h1 className="na-h1" style={{display:`${display}`, align:`${align}` }}>{children}</h1>,
            "h2": <h2 className="na-h2" style={{display:`${display}`, align:`${align}` }}>{children}</h2>,
            "h3": <h3 className="na-h3" style={{display:`${display}`, align:`${align}` }}>{children}</h3>,
            "h4": <h4 className="na-h4" style={{display:`${display}`, align:`${align}` }}>{children}</h4>,
            "h5": <h5 className="na-h5" style={{display:`${display}`, align:`${align}` }}>{children}</h5>,
            "h6": <h6 className="na-h6" style={{display:`${display}`, align:`${align}` }}>{children}</h6>,
            "body1": <p className="na-body1" style={{display:`${display}`, align:`${align}` }}>{children}</p>,
            "body2": <p className="na-body2" style={{display:`${display}`, align:`${align}` }}>{children}</p>,
            "subtitle1": <h6 className="na-subtitle1" style={{display:`${display}`, align:`${align}` }}>{children}</h6>,
            "subtitle2": <h6 className="na-subtitle2" style={{display:`${display}`, align:`${align}` }}>{children}</h6>,
            "button-text": <span className="na-button-text" style={{display:`${display}`, align:`${align}` }}>{children}</span>,
            "caption-text": <span className="na-caption-text" style={{display:`${display}`, align:`${align}` }}>{children}</span>,
            "overline-text": <span className="na-overline-text" style={{display:`${display}`, align:`${align}`}}>{children}</span>
        }[variant] || <p className="na-body1" style={{display:`${display}`, align:`${align}` }}>{children}</p> 
    )
}