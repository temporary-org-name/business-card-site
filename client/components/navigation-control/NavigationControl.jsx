import React from 'react';
import PropTypes from 'prop-types';

import './navigation-control.scss';

export default class NavigationControl extends React.Component {
    static propTypes = {
        onUpClick: PropTypes.func,
        onDownClick: PropTypes.func
    };

    render() {
        const {onUpClick, onDownClick} = this.props;
        return (<div className='navigation-control'>
            <div className='navigation-control__item navigation-control__item_nav_up' onClick={onUpClick}>
                <i className='navigation-control__icon'/>
            </div>
            <div className='navigation-control__item navigation-control__item_nav_down' onClick={onDownClick}>
                <i className='navigation-control__icon'/>
            </div>
        </div>);
    }
}
