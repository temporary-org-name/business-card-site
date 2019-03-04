import React from 'react';
import PropTypes from 'prop-types';

import NavigationControl from '../navigation-control/NavigationControl.jsx';
import Link from '../link/Link.jsx';

import './footer.scss';

export default class Footer extends React.Component {
    static propTypes = {
        onUpClick: PropTypes.func,
        onDownClick: PropTypes.func
    };

    render() {
        const {onUpClick, onDownClick} = this.props;
        return (<div className='footer'>
            <div className='content-wrapper footer__wrapper'>
                <NavigationControl onUpClick={onUpClick} onDownClick={onDownClick}/>
                <div className='footer__links'>
                    <ul className='footer__link-wrapper'>
                        {
                            ['Блог', 'Бета', 'Помощь', 'Организациям'].map((text, i) => (
                                <Link
                                    href=''
                                    key={`footer-link-${i}`}
                                    text={text}
                                    imgSrc='https://avatars.mds.yandex.net/get-bunker/118781/3bc962a74453607209f89d8fb42ba91c316fa351/svg'
                                />
                            ))
                        }
                    </ul>
                    <div className='copyright'>
                        <span className='copyright__dates'>© 2018-2019</span>
                    </div>
                </div>
            </div>
        </div>);
    }
}
