import React from 'react';
import Avatar from "./Avatar";

// meta data 
export default {
    title: 'Sodium UI/Avatar/Image', //mandatory
    component:Avatar,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        variant: "image",
        src: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        badge: {animation: false, badgeColor: "green"}
    },
    argsTypes:{
        variant: {control: "text"},
        src: {control: "text"},
        
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

