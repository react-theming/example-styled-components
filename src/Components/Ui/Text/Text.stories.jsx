import React from 'react';
import { Text } from './Text'

export default {
    title: "Text",
    component: Text,
    parameters: {
        align: {
            values: [
                { name: 'left', value: 'left'},
                { name: 'center', value: 'center'},
                { name: 'right', value: 'right'}
            ]
        }
    }
};

const Template = args => <Text {...args}/>;

export const Title = Template.bind({});

Title.args = {
    children: "Test text",
    align: "center"
};