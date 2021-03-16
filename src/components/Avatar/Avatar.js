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
    const {size = "medium", variant = "text", src, children, ...rest} = props;
    return (
        <div className={`na-avatar na-avatar-${size}`}>
            {
        {
          'image': <Image src={`${src}`} />,
          'text': <Text children={children}/>
        }[variant]
      }
        </div>
    )
}

export default Avatar;