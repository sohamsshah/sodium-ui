import React, { Children } from 'react';
import Alert from "./Alert";

// meta data 
export default {
    title: 'Sodium UI/Alert', //mandatory
    component:Alert,
    argsTypes:{
    }
}

const Template = args => <Alert {...args} dismissible/>

export const DismissibleAlert = Template.bind({})
DismissibleAlert.args = {
    children: <div>Hello World</div>,
    variant:"primary",
    show: false
    
}
