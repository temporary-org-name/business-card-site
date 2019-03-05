import React from 'react';

interface Props {
    href: string;
    text: string;
    image: string;
}

export default class Link extends React.Component<Props> {
    render() {
        const {href, text, image} = this.props;
        return (
            <li className='link'>
                <a href={href} target='_blank' rel='noopener noreferrer'>
                    <span>{text}</span>
                    <img
                        className='link__icon'
                        alt={text}
                        src={image}
                    />
                </a>
            </li>
        );
    }
}
