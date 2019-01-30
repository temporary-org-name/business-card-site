import React from 'react';
import './logotype.scss';
import Header from '../header/Header.jsx';

export default class Logotype extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='logotype'>
            <div className='content-wrapper logotype__wrapper'>
                <Header font={{weight: 'bold', size: 'large'}} text='Work'/>
                <Header font={{size: 'large'}} text='site' style={{marginLeft: 5}}/>
            </div>
        </div>);
    }
};