import React from 'react';
import './text.scss';
import getFontClass from '../../src/font-class/font-class.js';

export default class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {font: {size, weight, color}, value, style} = this.props;
        const fontClass = getFontClass({size, weight, color});
        return (<div className={`text ${fontClass}`} style={style}>{value}</div>);
    }
};