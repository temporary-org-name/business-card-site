import React from 'react';

interface Props {
    className: string;
    animationClass: string;
    isVisible: boolean;
    isPrevious: boolean;
}

export default class Page extends React.Component<Props> {
    render() {
        const {className, isVisible, isPrevious, animationClass} = this.props;

        return (
            <section className={
                `page ${className} ${isVisible ? 'page_visible' : ''} ` +
                    `${isPrevious ? 'page_order_previous' : ''} ` +
                    `${animationClass}`
            }>
                <div className='content-wrapper page__content-wrapper'>
                    <div className='page__column'>
                        <div className='page__content'>
                            <h3 className='page__title'>TITLE</h3>
                            <p className='page__description'>description</p>
                        </div>
                    </div>
                    <div className='page__column'>
                        <div className='laptop'>
                            <div className='laptop__mockup'></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
