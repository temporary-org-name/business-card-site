import React from 'react';
import PropTypes from 'prop-types';

import getFontClass from '../../src/font-class/font-class.js';

import './text.scss';

export default class Text extends React.Component {
    static propTypes = {
        font: PropTypes.object.isRequired,
        value: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired
    };

    render() {
        const {font: {size, weight, color}, value, style} = this.props;

        const fontClass = getFontClass({size, weight, color});
        return (<div className={`text ${fontClass}`} style={style}>{value}</div>);
    }
}
