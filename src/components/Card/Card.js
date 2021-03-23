import React from "react"
import Paper from "./../Paper/Paper"
import Typography from "./../Typography/Typography"

const Img = ({src,alt="card image", width = "100%", height="100%", ...rest}) => {
    return(<img alt={alt} src={src} style={{width: `${width}`, height: `${height}`}} {...rest}></img>)
}

const Title = ({ children, ...rest }) => {
    // Absolutely terrible unreadable formatting
    return(<Typography variant="h4" {...rest}> 
    {children}
</Typography>)
}

const Subtitle = ({children, ...rest}) => {
    return(<Typography variant="subtitle1" {...rest}>
    {children}
</Typography>)
}

const Text = ({children, ...rest}) => {
    return(<Typography variant="body1" {...rest}>
    {children}
</Typography>)
}


export default function Card({children, ...rest}){
    return(
        <Paper {...rest}>
            {children}
        </Paper>
    )
}


Card.Img = Img;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;