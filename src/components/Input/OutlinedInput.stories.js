import React from 'react';
import Input from "./Input"

// meta data 
export default {
    title: 'Sodium UI/Input/Outlined', //mandatory
    component:Input,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        variant: "outlined",
        
    },
    argsTypes:{
        variant: {control: "text"},
        size: {control: "text"}
        
    }
}
    


const Template = args => <Input {...args} />

export const Small = Template.bind({})
Small.args = {
size: "small",

}

export const Medium = Template.bind({})
Medium.args = {
size: "medium",

}

export const Large = Template.bind({})
Large.args = {
size: "large",
}
