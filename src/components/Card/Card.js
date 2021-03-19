import React from "react"
import Paper from "./../Paper/Paper"
import Button from "./../Button/Button"
import Typography from "./../Typography/Typography"

export default function Card(){
    return(
        <Paper style={{width:"250px", height:"300px"}}>
        <Typography variant="h4">
            Card Title
        </Typography>  
        <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Typography>
        <Button> Visit</Button>
        
        </Paper>
    )
}