import React, { Children } from 'react';
import Avatar from "./Avatar";

// meta data 
export default {
    title: 'Sodium UI/Avatar/Text', //mandatory
    component:Avatar,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        variant: "text",
        children: "NA",
        badge: {animation: false, badgeColor: "green"}
        
        
    },
    argsTypes:{
        variant: {control: "text"},
        children: {control: "text"},
        
    }
}

const Template = args => <Avatar {...args} />

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

