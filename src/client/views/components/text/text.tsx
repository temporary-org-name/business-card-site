import React from 'react';
import cl from 'classnames';

import bevis from 'client/lib/bevis';

interface Props {
    value: string;
    className?: string;
}

const b = bevis('text');

export default class Text extends React.Component<Props> {
    render() {
        const {value, className} = this.props;

        return (
            <div className={cl(b(), className)}>
                {value}
            </div>
        );
    }
}
