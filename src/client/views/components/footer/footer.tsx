import React from 'react';
import cl from 'classnames';

import NavigationControl from 'client/views/components/navigation-control';
import Link from 'client/views/components/link';
import bevis from 'client/lib/bevis';

interface Props {
    onUpClick: () => void;
    onDownClick: () => void;
    className?: string;
}

const b = bevis('footer');

export default class Footer extends React.Component<Props> {
    render() {
        const {onUpClick, onDownClick, className} = this.props;
        return (
            <div className={cl(b(), className)}>
                <div className='content-wrapper footer__wrapper'>
                    <NavigationControl onUpClick={onUpClick} onDownClick={onDownClick}/>
                    <div className={b('links')}>
                        <ul className={b('link-wrapper')}>
                            {
                                ['Блог', 'Бета', 'Помощь', 'Организациям'].map((text, i) => (
                                    <Link
                                        href=''
                                        key={`footer-link-${i}`}
                                        text={text}
                                        image='https://avatars.mds.yandex.net/get-bunker/118781/3bc962a74453607209f89d8fb42ba91c316fa351/svg'
                                    />
                                ))
                            }
                        </ul>
                        <div className='copyright'>
                            <span className='copyright__dates'>© 2018-2019</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
