import React from 'react';
import PropTypes from 'prop-types';

import './link.scss';

export default class Link extends React.Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired
    };

    render() {
        const {href, text, imgSrc} = this.props;
        return (
            <li className='link'>
                <a href={href} target='_blank' rel='noopener noreferrer'>
                    <span>{text}</span>
                    <img
                        className='link__icon'
                        alt={text}
                        src={imgSrc}
                    />
                </a>
            </li>
        );
    }
}
