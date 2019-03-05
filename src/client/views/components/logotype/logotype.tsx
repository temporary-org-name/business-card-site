import React from 'react';

import Text from 'client/views/components/text';

interface Props {}

export default class Logotype extends React.Component<Props> {
    render() {
        return (
            <div className='logotype'>
                <div className='content-wrapper logotype__wrapper'>
                    <Text value='Work'/>
                    <Text value='text'/>
                </div>
            </div>
        );
    }
}
