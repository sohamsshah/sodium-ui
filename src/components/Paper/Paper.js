import React from "react"
import "./Paper.css"

const Elevation = ({square, elevation, children, ...rest}) => {
    return(
    (square)?(<div className={`na-paper na-paper-square na-paper-elevation-${elevation}`}>
    {children}
    </div>):(<div className={`na-paper na-paper-elevation-${elevation}`}>
    {children}
    </div>)
    )
}

const Outlined = ({square, children, ...rest}) => {
    return(
        (square)?(<div className={`na-paper na-paper-square na-paper-outlined`}>
        {children}
        </div>):(<div className={`na-paper na-paper-outlined`}>
    {children}
    </div>)
        
    )
}

export default function Paper(props){
    const {elevation=2, variant="elevation", square=false, children, ...rest} = props;
    console.log(elevation);
    return (
        <div>
        {
            {
              'outlined': <Outlined children={children} square={square} />,
              'elevation': <Elevation elevation={elevation} children={children} square={square} />
            }[variant]
          }
          </div>
    )

}