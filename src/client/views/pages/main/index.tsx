import React from 'react';
import {render} from 'react-dom';

import Main from 'client/views/pages/main/main';

import './main.scss';

window.onload = function (): void {
    render(
        <Main />,
        document.getElementById('mount')
    );
};