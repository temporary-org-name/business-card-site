import React from 'react';
import PropTypes from 'prop-types';

import './layout.scss';

export default class Layout extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    render() {
        const {children} = this.props;

        return (<div className='layout'>
            {children}
            <div className='layout__dimmer'></div>
        </div>);
    }
}
