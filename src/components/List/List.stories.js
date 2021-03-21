import React from 'react';
import List from "./List"

// meta data 
export default {
    title: 'Sodium UI/List', //mandatory
    component:List,
    argsTypes:{

    }
}

export const SimpleList = () => {
    return(
        
        <List>
            <List.Item active>
            Item 1
            </List.Item>
            <List.Item>
            Item 2
            </List.Item>
            <List.Item>
            Item 3
            </List.Item>
            <List.Item disabled>
            Item 4
            </List.Item>
            
        </List>
    )
}

export const FlushList = () => {
    return(
        
        <List variant="flush">
            <List.Item>
            Item 1
            </List.Item>
            <List.Item>
            Item 2
            </List.Item>
            <List.Item disabled>
            Item 3
            </List.Item>
            
        </List>
    )
}

