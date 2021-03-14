import React from 'react';
import Button from "./Button"

// meta data 
export default {
    title: 'Button', //mandatory
    component:Button
}

export const Primary = () => <Button variant="primary" kind="filled">Primary</Button>
export const Secondary = () => <Button variant="secondary" kind="bordered">Secondary</Button>
export const Success = () => <Button variant="success" kind="bordered">Success</Button>
export const Warning = () => <Button variant="warning">Warning</Button>
export const Danger = () => <Button variant="danger">Danger</Button>
export const Info = () => <Button variant="info">Info</Button>
export const Light = () => <Button variant="light">Light</Button>
export const Dark = () => <Button variant="dark">Dark</Button>
