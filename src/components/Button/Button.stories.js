import React from 'react';
import Button from "./Button"

export default {
    title: 'Button',
    component:Button
}

export const Primary = () => <Button variant="primary">primary</Button>
export const Secondary = () => <Button variant="secondary">secondary</Button>
export const Danger = () => <Button variant="danger">danger</Button>
export const Success = () => <Button variant="success">success</Button>