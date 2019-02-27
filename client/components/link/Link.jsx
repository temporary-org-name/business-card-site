import React from 'react';


import './link.scss';

export default class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {href, text, imgSrc} = this.props;
        return (
            <li className='link'>
                <a href={href} target='_blank'>
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
};