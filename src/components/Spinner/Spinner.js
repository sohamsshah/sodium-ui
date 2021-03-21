import React from "react"
import "./Spinner.css"

export default function Spinner(props){
    const {size="large", ...rest} = props;

    return(<div style={{width:"150px", height:"150px"}}{...rest}>
    <div class={`na-loading-${size} loading--full-height`}></div>
</div>)
}