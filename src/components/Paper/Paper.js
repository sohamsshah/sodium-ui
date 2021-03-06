import React from "react"
import "./Paper.css"

const Elevation = ({square, elevation, children, ...rest}) => {
    return(
    (square)?(<div className={`na-paper na-paper-square na-paper-elevation-${elevation}`} {...rest}>
    {children}
    </div>):(<div className={`na-paper na-paper-elevation-${elevation}`} {...rest}>
    {children}
    </div>)
    )
}

const Outlined = ({square, children, ...rest}) => {
    return(
        (square)?(<div className={`na-paper na-paper-square na-paper-outlined`} {...rest}>
        {children}
        </div>):(<div className={`na-paper na-paper-outlined`} {...rest}>
    {children}
    </div>)
        
    )
}

export default function Paper(props){
    const {elevation=2, variant="elevation", square=false, children, ...rest} = props;
    return (
            {
              'outlined': <Outlined children={children} square={square} {...rest} />,
              'elevation': <Elevation elevation={elevation} children={children} square={square} {...rest} />
            }[variant] || <Elevation elevation={elevation} children={children} square={square} {...rest} />
             
    )

}