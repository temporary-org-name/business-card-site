import React from 'react';
import './page.scss';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section className={`page ${this.props.className}`}>
            <div className='content-wrapper page__content-wrapper'>
                <div className='page__column'>
                    <div className='page__content'></div>
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