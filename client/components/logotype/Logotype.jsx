import React from 'react';
import './logotype.scss';
import Text from '../text/Text.jsx';

export default class Logotype extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='logotype'>
            <div className='content-wrapper logotype__wrapper'>
                <Text font={{weight: 'bold', size: 'xxlarge', color: 'white'}} value='Work'/>
                <Text font={{size: 'xlarge', color: 'white'}} value='site' style={{marginLeft: 5}}/>
            </div>
        </div>);
    }
};