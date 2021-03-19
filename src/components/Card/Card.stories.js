import React, { Children } from 'react';
import Card from "./Card";

// meta data 
export default {
    title: 'Sodium UI/Card', //mandatory
    component:Card,
    argsTypes:{

    }
}

export const Cool = args => <Card {...args} />
Cool.args = {
}


