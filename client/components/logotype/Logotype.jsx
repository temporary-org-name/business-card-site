import React from 'react';

import Text from '../text/Text.jsx';

import './logotype.scss';

export default class Logotype extends React.Component {
    render() {
        return (<div className='logotype'>
            <div className='content-wrapper logotype__wrapper'>
                <Text font={{weight: 'bold', size: 'xxlarge', color: 'white'}} value='Work'/>
                <Text font={{size: 'xlarge', color: 'white'}} value='site' style={{marginLeft: 5}}/>
            </div>
        </div>);
    }
}
