import React from 'react';
import Input from "./Input"

// meta data 
export default {
    title: 'Form/Input/Outlined', //mandatory
    component:Input
}

export const Small = () => <Input size="small" variant="outlined"></Input>
export const Medium = () => <Input size="medium" variant="outlined"></Input>
export const Large = () => <Input size="large" variant="outlined"></Input>
