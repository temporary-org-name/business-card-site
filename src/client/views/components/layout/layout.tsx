import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default class Layout extends React.Component<Props> {
    render() {
        const {children} = this.props;

        return (
            <div className='layout'>
                {children}
                <div className='layout__dimmer'></div>
            </div>
        );
    }
}
