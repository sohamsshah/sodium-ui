import React, { Children } from 'react';
import Card from "./Card";
import Button from "./../Button/Button"


// meta data 
export default {
    title: 'Sodium UI/Card', //mandatory
    component:Card,
    argsTypes:{

    }
}

export const SimpleCard = () => {
    return(<Card style={{width:"250px", height:"250px", padding:"1%"}}>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
        <Card.Text style={{paddingBottom:"2rem"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button style={{margin:"0 0.35em"}}>Go Somewhere</Button>
    </Card>)
}

export const CardWithImage = () => {
    return(<Card style={{width:"250px", height:"400px", padding:"1%"}}>
        <Card.Img width="250px" height="150px" src="https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg"/>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
        <Card.Text style={{paddingBottom:"2rem"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button style={{margin:"0 0.35em"}}>Go Somewhere</Button>
    </Card>)
}


