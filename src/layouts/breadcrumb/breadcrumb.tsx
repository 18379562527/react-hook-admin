import React from 'react';
import { Breadcrumb } from 'antd';

export default () => (
    <Breadcrumb
        items={[
            {
                title: 'Home',
            },
            {
                title: <a href="">Application Center</a>,
            },
            {
                title: <a href="">Application List</a>,
            },
            {
                title: 'An Application',
            },
        ]}
    />
);