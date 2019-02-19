import React from 'react';

import './navigation-control.scss';

export default class NavigationControl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onUpClick, onDownClick} = this.props;
        return (<div className='navigation-control'>
            <div class='navigation-control__item navigation-control__item_nav_up' onClick={onUpClick}>
                <i class='navigation-control__icon'/>
            </div>
            <div class='navigation-control__item navigation-control__item_nav_down' onClick={onDownClick}>
                <i class='navigation-control__icon'/>
            </div>
        </div>);
    }
};