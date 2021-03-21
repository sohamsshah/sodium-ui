import React from 'react';
import Spinner from "./Spinner";

// meta data 
export default {
    title: 'Sodium UI/Spinner', //mandatory
    component:Spinner,
    argsTypes:{
    }
}

const Template = args => <Spinner {...args} />

export const Small = Template.bind({})
Small.args = {
    size: "small"
    
}

export const Medium = Template.bind({})
Medium.args = {
    size: "medium"
    
}

export const Large = Template.bind({})
Large.args = {
    size: "large"
    
}
