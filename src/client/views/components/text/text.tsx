import React from 'react';

interface Props {
    value: string;
    className?: string;
}

export default class Text extends React.Component<Props> {
    render() {
        const {value, className} = this.props;

        return (
            <div className={className}>
                {value}
            </div>
        );
    }
}
