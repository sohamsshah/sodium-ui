import React, { Children } from 'react';
import Box from "./Box";

// meta data 
export default {
    title: 'Sodium UI/Box', //mandatory
    component:Box,
}

const Template = args => <Box {...args} />

export const Standard = Template.bind({})
Standard.args = {
    children: <div>Hello World</div>,
    // p: "2rem",
    m:"1rem",
    bgcolor:"pink"
}
