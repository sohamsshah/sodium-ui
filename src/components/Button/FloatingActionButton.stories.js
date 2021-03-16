import React from 'react';
import Button from "./Button"

// meta data 
export default {
    title: 'Sodium UI/Form/Button/Floating Action Button', //mandatory
    component:Button,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        kind: "fab",
        
    },
    argsTypes:{
        variant: {control: "text"},
        kind: {control: "text"},  
    }
}


const Template = args => <Button {...args} />

export const Standard = Template.bind({})
Standard.args = {
    children: "+",
    variant:"fab-standard"
}

export const Extended = Template.bind({})
Extended.args = {
    children: <div><span>+</span> ADD </div>,
    variant:"fab-extended"
}
