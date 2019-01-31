import React from 'react';
import './layout.scss';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='layout'>
            {this.props.children}
            <div className='layout__dimmer'></div>
        </div>);
    }
};