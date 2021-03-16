import React from 'react';
import "./Avatar.css";

const textParser = (str) => {
    function isUpperCase(aCharacter)    
    {    
        return (aCharacter >= 'A') && (aCharacter <= 'Z');
    }
    let updatedString = str.split(' ').join('');
    let res = []
    for(let i in updatedString){
      if(res.length >= 2){
        break;
      }
      if(isUpperCase(updatedString[i])){
        res.push(updatedString[i]);
      }
    }
    return res.join('');
}

textParser("Soham Shah")
function Image({src}){
    console.log(src);
    return <img className="na-avatar-image" src={`${src}`}/>

}

function Text({children}){
    return <div className={`na-avatar-text`}>
        {textParser(children)}
    </div>
}
function Avatar(props){
    const {size = "medium", variant = "text", badge, src, children, ...rest} = props;
    if(typeof badge !== 'undefined'){
        var {animation=true, badgeColor = "green"} = badge;
    }
    
    return (
        <div className={`na-avatar na-avatar-${size}`}>
            {
        {
          'image': <Image src={`${src}`} />,
          'text': <Text children={children}/>
        }[variant]
      }
        {(typeof badge !== "undefined")?(<div style={{backgroundColor: `${badgeColor}`}} className="na-avatar-badge na-badge-animate"></div>):""}
    </div>
    )
    }

export default Avatar;