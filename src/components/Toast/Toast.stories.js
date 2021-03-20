import React from 'react';
import Toast from "./Toast";

// meta data 
export default {
    title: 'Sodium UI/Toast', //mandatory
    component:Toast,
    argsTypes:{
    }
}


export const SimpleToast = () => {
    return(
<Toast>
    <Toast.Header>
        Sodium
    </Toast.Header>
    <Toast.Body>
        Hello World! This is sodium toast
    </Toast.Body>
</Toast>)
}
