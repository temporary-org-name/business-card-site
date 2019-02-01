import React from 'react';
import './page.scss';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className} = this.props;

        return (<section className={
            `page ${className} ${this.props.isVisible ? 'page_visible' : ''} ` +
                `${this.props.isPrevious ? 'page_order_previous' : ''} ` +
                `${this.props.animationClass}`
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
        </section>);
    }
};