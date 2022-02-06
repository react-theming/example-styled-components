import { Alert } from "./Alert";
import React from 'react'

export default {
    title: "Alert",
    component: Alert
};

export const Template = args => <Alert {...args} />;

export const Warning = Template.bind({});

Warning.args = {
    children: "This is a mistake my friend"
}

