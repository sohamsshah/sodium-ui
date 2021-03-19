import React from "react";
import "./Typography.css"


export default function Typography(props){
    const {variant="body1", display="block", align="inherit", children, ...rest} = props;
    return(
        {
            "h1": <h1 className="na-h1 na-typography" style={{display:`${display}`, textAlign:`${align}` }} {...rest}>{children}</h1>,
            "h2": <h2 className="na-h2 na-typography" style={{display:`${display}`, textAlign:`${align}` }} {...rest}>{children}</h2>,
            "h3": <h3 className="na-h3 na-typography" style={{display:`${display}`, textAlign:`${align}` }} {...rest}>{children}</h3>,
            "h4": <h4 className="na-h4 na-typography" style={{display:`${display}`, textAlign:`${align}` }} {...rest}>{children}</h4>,
            "h5": <h5 className="na-h5 na-typography" style={{display:`${display}`, textAlign:`${align}` }} {...rest}>{children}</h5>,
            "h6": <h6 className="na-h6 na-typography" style={{display:`${display}`, textAlign:`${align}` }} {...rest}>{children}</h6>,
            "body1": <p className="na-body1 na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</p>,
            "body2": <p className="na-body2 na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</p>,
            "subtitle1": <h6 className="na-subtitle1 na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</h6>,
            "subtitle2": <h6 className="na-subtitle2 na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</h6>,
            "button-text": <span className="na-button-text na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</span>,
            "caption-text": <span className="na-caption-text na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</span>,
            "overline-text": <span className="na-overline-text na-typography" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</span>
        }[variant] || <p className="na-body1" style={{display:`${display}`, textAlign:`${align}`}} {...rest}>{children}</p> 
    )
}