import React from 'react';
import './main.scss';
import Logotype from '../../components/logotype/Logotype.jsx';
import Layout from '../../components/layout/Layout.jsx';
import Page from '../../components/page/Page.jsx';

import getPageAnimationClass from '../../components/page/animation/animation.js';

const PAGES_COUNT = 4;

export default class Main extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            visibleIndex: 0,
            previousIndex: PAGES_COUNT - 1,
            animation: {
                page0: '',
                page1: '',
                page2: '',
                page3: ''
            }
        };

        this._handleWheel = this._handleWheel.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this._handleWheel, true);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this._handleWheel);
    }

    _calcIndex(isDown, current) {
        if (isDown) {
            return current === PAGES_COUNT - 1 ? 0 : current + 1;
        } else {
            return current === 0 ? PAGES_COUNT - 1 : current - 1;
        }
    }

    /**
     * If dy > 0 => scrolling down
     */
    _handleWheel(event) {
        const dy = event.deltaY;
        if (Math.abs(dy) < 5 || this._isAnimation) return;

        const visibleNextIndex = this._calcIndex(dy > 0, this.state.visibleIndex);

        this._isAnimation = true;
        this.setState({
            animation: {
                page0: getPageAnimationClass(dy > 0, 0, visibleNextIndex, this.state.visibleIndex),
                page1: getPageAnimationClass(dy > 0, 1, visibleNextIndex, this.state.visibleIndex),
                page2: getPageAnimationClass(dy > 0, 2, visibleNextIndex, this.state.visibleIndex),
                page3: getPageAnimationClass(dy > 0, 3, visibleNextIndex, this.state.visibleIndex)
            }
        });

        setTimeout(() => {
            this.setState({
                animation: {
                    page0: '',
                    page1: '',
                    page2: '',
                    page3: ''
                },
                visibleIndex: this._calcIndex(dy > 0, this.state.visibleIndex),
                previousIndex: this._calcIndex(dy > 0, this.state.previousIndex)
            });

            this._isAnimation = false;
        }, 1000);
    }

    render() {
        return (<div className='main-container'>
            <Logotype />
            <Layout>
                <Page className='page_name_main'
                    animationClass={this.state.animation.page0}
                    isPrevious={0 === this.state.previousIndex}
                    isVisible={0 === this.state.visibleIndex}/>
                <Page className='page_name_x'
                    animationClass={this.state.animation.page1}
                    isPrevious={1 === this.state.previousIndex}
                    isVisible={1 === this.state.visibleIndex}/>
                <Page className='page_name_main'
                    animationClass={this.state.animation.page2}
                    isPrevious={2 === this.state.previousIndex}
                    isVisible={2 === this.state.visibleIndex}/>
                <Page className='page_name_x'
                    animationClass={this.state.animation.page3}
                    isPrevious={3 === this.state.previousIndex}
                    isVisible={3 === this.state.visibleIndex}/>
            </Layout>
        </div>);
    }
};