import React from 'react';
import Button from "./Button"

// meta data 
export default {
    title: 'Sodium UI/Form/Button/Filled', //mandatory
    component:Button,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        children: 'Filled Button',
        kind: "filled",
        
    },
    argsTypes:{
        variant: {control: "text"},
        kind: {control: "text"},  
    }
}

// export const Primary = () => <Button variant="primary" kind="filled">Primary</Button>
// export const Secondary = () => <Button variant="secondary" kind="filled">Secondary</Button>
// export const Success = () => <Button variant="success" kind="filled">Success</Button>
// export const Warning = () => <Button variant="warning" kind="filled">Warning</Button>
// export const Danger = () => <Button variant="danger" kind="filled">Danger</Button>
// export const Info = () => <Button variant="info" kind="filled">Info</Button>
// export const Light = () => <Button variant="light" kind="filled">Light</Button>
// export const Dark = () => <Button variant="dark" kind="filled">Dark</Button>

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: "primary",
    
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: "secondary",
}

export const Success = Template.bind({})
Success.args = {
    variant: "success",
}

export const Warning = Template.bind({})
Warning.args = {
    variant: "warning",
}

export const Danger = Template.bind({})
Danger.args = {
    variant: "danger",
}

export const Info = Template.bind({})
Info.args = {
    variant: "info",
}

export const Light = Template.bind({})
Light.args = {
    variant: "light",
}

export const Dark = Template.bind({})
Dark.args = {
    variant: "dark",
}
