import React, { useEffect } from "react"
import Typography from "./../Typography/Typography"
import "./Modal.css"

const Title = ({closeButton={show:false}, children, ...rest}) => {
    const {show, onHide} = closeButton;
    return(
        <div className = {`na-modal-title`} {...rest}>
           {children}
           
           {(show)?(<button onClick={() => onHide()} className="na-modal-dismiss">×</button>):("")}
        </div>
    )
}

const Body = ({children, ...rest}) => {
    return(
        <div className = {`na-modal-body`} {...rest}>
           {children}
        </div>
    )
}

const Footer = ({children, ...rest}) => {
    return(
        <div className = {`na-modal-footer`} {...rest}>
           {children}
        </div>
    )
}

export default function Modal(props){
    const {show=true, onHide, size="medium", animation=true,  children, ...rest} = props;
    const setSize = (size) => {
        switch(size){
        case "small":
            return "360px";
        case "medium":
            return "480px"
        case "large":
            return "600px"
        default:
            return "480px"
        }   
    }
    let sizeVariant = setSize(size);

    let visibility;
    (show)?(visibility="show"):(visibility="hide")
    const handleClick = (event) => {
            if(event.target.className === "na-modal na-modal-show"){
                onHide();
            }
          }
    useEffect(() => {
        window.addEventListener('click', handleClick);
          return () => {
            window.removeEventListener('click', handleClick);
          };
        }, [])
    return(
        <div className={`na-modal na-modal-${visibility}`} {...rest}>
            
            <div style={{width:`${sizeVariant}`}} className={`na-modal-content na-modal-animation-${animation}`}>
                {children}  
            </div>
        </div>
        
    )
}

Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;