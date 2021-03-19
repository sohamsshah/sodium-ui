import React from 'react';
import Alert from "./Alert";

// meta data 
export default {
    title: 'Sodium UI/Alert/Dismissible', //mandatory
    component:Alert,
    argsTypes:{
    }
}

const Template = args => <Alert {...args} dismissible/>

export const Primary = Template.bind({})
Primary.args = {
    children: "This is a primary alert—check it out!",
    variant:"primary",

}

export const Secondary = Template.bind({})
Secondary.args = {
    children: "This is a secondary alert—check it out!",
    variant:"secondary", 
}

export const Success = Template.bind({})
Success.args = {
    children: "This is a primary alert—check it out!",
    variant:"success",
    show: true 
}

export const Danger = Template.bind({})
Danger.args = {
    children: "This is a danger alert—check it out!",
    variant:"danger", 
}

export const Warning = Template.bind({})
Warning.args = {
    children: "This is a warning alert—check it out!",
    variant:"warning"
}

export const Info = Template.bind({})
Info.args = {
    children: "This is a info alert—check it out!",
    variant:"info"
}

export const Light = Template.bind({})
Light.args = {
    children: "This is a light alert—check it out!",
    variant:"light",
}

export const Dark = Template.bind({})
Dark.args = {
    children: "This is a dark alert—check it out!",
    variant:"dark",
}

