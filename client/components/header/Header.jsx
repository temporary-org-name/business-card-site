import React from 'react';
import './header.scss';
import getFontClass from '../../src/font-class/font-class.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {font: {size, weight}, text, style} = this.props;
        const fontClass = getFontClass({size, weight});
        return (<div className={`header ${fontClass}`} style={style}>{text}</div>);
    }
};