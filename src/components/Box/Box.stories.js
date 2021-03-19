import React from 'react';
import Box from "./Box";

// meta data 
export default {
    title: 'Sodium UI/Box', //mandatory
    component:Box,
    argsTypes:{
        h: {control: "text"},
        w: {control: "text"},
        p: {control: "text"},
        m: {control: "text"},
        color: {control: "text"},
        bgcolor: {control: "text"},
    

    }
}

const Template = args => <Box {...args} />

export const Standard = Template.bind({})
Standard.args = {
    children: <div>Hello World</div>,
    p: "2rem",
    m:"1rem",
    bgcolor:"yellow",
    color: "#212121",
    h: "50%",
    w: "50%"
}
