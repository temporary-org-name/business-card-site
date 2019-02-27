import React from 'react';

import Logotype from '../../components/logotype/Logotype.jsx';
import Layout from '../../components/layout/Layout.jsx';
import Page from '../../components/page/Page.jsx';
import Footer from '../../components/footer/Footer.jsx';

import getPageAnimationClass from '../../components/page/animation/animation.js';

import './main.scss';

const PAGES_COUNT = 4;
const EMPTY_ANIMATION = new Array(4).fill(0);

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleIndex: 0,
            previousIndex: PAGES_COUNT - 1,
            animation: EMPTY_ANIMATION
        };

        this._handleWheel = this._handleWheel.bind(this);
        this._onNavigationUpClick = this._onNavigationUpClick.bind(this);
        this._onNavigationDownClick = this._onNavigationDownClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this._handleWheel, true);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this._handleWheel);
    }

    _onNavigationUpClick() {
        this._handleWheel({deltaY: -10});
    }

    _onNavigationDownClick() {
        this._handleWheel({deltaY: 10});
    }

    static _calcIndex(isDown, current) {
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

        const visibleNextIndex = Main._calcIndex(dy > 0, this.state.visibleIndex);

        this._isAnimation = true;
        this.setState({
            animation: EMPTY_ANIMATION.map(
                (_, i) => getPageAnimationClass(dy > 0, i, visibleNextIndex, this.state.visibleIndex)
            )
        });

        setTimeout(() => {
            this.setState({
                animation: EMPTY_ANIMATION,
                visibleIndex: Main._calcIndex(dy > 0, this.state.visibleIndex),
                previousIndex: Main._calcIndex(dy > 0, this.state.previousIndex)
            });

            this._isAnimation = false;
        }, 1000);
    }

    render() {
        return (<div className='main-container'>
            <Logotype />
            <Layout>
                {
                    [0, 1, 2, 3].map((i) => {
                        return (
                            <Page
                                key={`page-${i}`}
                                className={`page_name_${i}`}
                                animationClass={this.state.animation[i]}
                                isPrevious={i === this.state.previousIndex}
                                isVisible={i === this.state.visibleIndex}
                            />
                        )
                    })
                }
            </Layout>
            <Footer onUpClick={this._onNavigationUpClick} onDownClick={this._onNavigationDownClick} />
        </div>);
    }
};