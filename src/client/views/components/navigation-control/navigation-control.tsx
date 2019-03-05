import React from 'react';

interface Props {
    onUpClick: () => void;
    onDownClick: () => void;
}

export default class NavigationControl extends React.Component<Props> {
    render() {
        const {onUpClick, onDownClick} = this.props;
        return (
            <div className='navigation-control'>
                <div className='navigation-control__item navigation-control__item_nav_up' onClick={onUpClick}>
                    <i className='navigation-control__icon'/>
                </div>
                <div className='navigation-control__item navigation-control__item_nav_down' onClick={onDownClick}>
                    <i className='navigation-control__icon'/>
                </div>
            </div>
        );
    }
}
