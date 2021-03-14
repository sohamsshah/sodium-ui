import React from 'react';
import Input from "./Input"

// meta data 
export default {
    title: 'Input', //mandatory
    component:Input
}

export const Standard = () => <Input size="medium" variant="standard"></Input>
export const Outlined = () => <Input size="medium" variant="outlined"></Input>
