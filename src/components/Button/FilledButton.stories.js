import React from 'react';
import Button from "./Button"

// meta data 
export default {
    title: 'Form/Button/Filled', //mandatory
    component:Button
}

export const Primary = () => <Button variant="primary" kind="filled">Primary</Button>
export const Secondary = () => <Button variant="secondary" kind="filled">Secondary</Button>
export const Success = () => <Button variant="success" kind="filled">Success</Button>
export const Warning = () => <Button variant="warning" kind="filled">Warning</Button>
export const Danger = () => <Button variant="danger" kind="filled">Danger</Button>
export const Info = () => <Button variant="info" kind="filled">Info</Button>
export const Light = () => <Button variant="light" kind="filled">Light</Button>
export const Dark = () => <Button variant="dark" kind="filled">Dark</Button>
