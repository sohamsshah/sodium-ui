import React from 'react';
import Input from "./Input"

// meta data 
export default {
    title: 'Sodium UI/Form/Input/Standard', //mandatory
    component:Input
}

export const Small = () => <Input size="small" variant="standard"></Input>
export const Medium = () => <Input size="medium" variant="standard"></Input>
export const Large = () => <Input size="large" variant="standard"></Input>
