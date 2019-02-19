import React from 'react';

import NavigationControl from '../navigation-control/NavigationControl.jsx';

import './footer.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onUpClick, onDownClick} = this.props;
        return (<div className='footer'>
            <div className='content-wrapper footer__wrapper'>
                <NavigationControl onUpClick={onUpClick} onDownClick={onDownClick}/>
                <div className='footer__links'>

                </div>
            </div>
        </div>);
    }
};