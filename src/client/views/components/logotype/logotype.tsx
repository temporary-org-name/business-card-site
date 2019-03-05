import React from 'react';

import bevis from 'client/lib/bevis';
import Text from 'client/views/components/text';

interface Props {}

const b = bevis('logotype');

export default class Logotype extends React.Component<Props> {
    render() {
        return (
            <div className={b()}>
                <div className='content-wrapper logotype__wrapper'>
                    <Text value='Work' className={b('text-big')}/>
                    <Text value='text' className={b('text-small')}/>
                </div>
            </div>
        );
    }
}
