import React, { Children } from 'react';
import Typography from "./Typography";

// meta data 
export default {
    title: 'Sodium UI/Typography', //mandatory
    component:Typography,
    argsTypes:{

    }
}

export const h1 = args => <Typography {...args} />
h1.args = {
    variant:"h1",
    children: "h1. Heading",
    align:"right"
}

export const h2 = args => <Typography {...args} />
h2.args = {
    variant:"h2",
    children: "h2. Heading"
}

export const h3 = args => <Typography {...args} />
h3.args = {
    variant:"h3",
    children: "h3. Heading"
}

export const h4 = args => <Typography {...args} />
h4.args = {
    variant:"h4",
    children: "h4. Heading"
}

export const h5 = args => <Typography {...args} />
h5.args = {
    variant:"h5",
    children: "h5. Heading"
}

export const h6 = args => <Typography {...args} />
h6.args = {
    variant:"h6",
    children: "h6. Heading"
}

export const body1 = args => <Typography {...args} />
body1.args = {
    variant:"body1",
    children: "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
}

export const body2 = args => <Typography {...args} />
body2.args = {
    variant:"body2",
    children: "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
}

export const subtitle1 = args => <Typography {...args} />
subtitle1.args = {
    variant:"subtitle1",
    children: "subtitle1. subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
}

export const subtitle2 = args => <Typography {...args} />
subtitle2.args = {
    variant:"subtitle2",
    children: "subtitle2. subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
}

export const buttonText = args => <Typography {...args} />
buttonText.args = {
    variant:"button-text",
    children: "Button Text"
}


export const captionText = args => <Typography {...args} />
captionText.args = {
    variant:"caption-text",
    children: "caption text"
}

export const outlineText = args => <Typography {...args} />
outlineText.args = {
    variant:"outline-text",
    children: "outline text"
}

