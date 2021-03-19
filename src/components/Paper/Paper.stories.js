import React, { Children } from 'react';
import Paper from "./Paper";

// meta data 
export default {
    title: 'Sodium UI/Paper', //mandatory
    component:Paper,
    argsTypes:{

    }
}

const Template = args => <Paper {...args} />

export const Elevated = Template.bind({})
Elevated.args = {
    children: <div>Hello World</div>,
    elevation:3,
    square:false,
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: <div>Hello World</div>,
    variant:"outlined",
    square:true,
}
