import React from 'react';

import Logotype from 'client/views/components/logotype';
import Layout from 'client/views/components/layout';
import Page, {getPageAnimationClass} from 'client/views/components/page';
import Footer from 'client/views/components/footer';

const PAGES_COUNT = 4;
const EMPTY_ANIMATION = new Array(4).fill('');

interface Props {}
interface State {
    visibleIndex: number;
    previousIndex: number;
    animation: string[];
}

export default class Main extends React.Component<Props, State> {
    private _isAnimation?: boolean;

    state = {
        visibleIndex: 0,
        previousIndex: PAGES_COUNT - 1,
        animation: EMPTY_ANIMATION
    };

    componentDidMount() {
        window.addEventListener('wheel', this._handleWheel, true);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this._handleWheel);
    }

    private _onNavigationUpClick = () => {
        this._handleWheel({deltaY: -10});
    }

    private _onNavigationDownClick = () => {
        this._handleWheel({deltaY: 10});
    }

    private static _calcIndex = (isDown, current) => {
        if (isDown) {
            return current === PAGES_COUNT - 1 ? 0 : current + 1;
        } else {
            return current === 0 ? PAGES_COUNT - 1 : current - 1;
        }
    }

    /**
     * If dy > 0 => scrolling down
     */
    private _handleWheel = (event) => {
        const dy = event.deltaY;
        if (Math.abs(dy) < 5 || this._isAnimation) {
            return;
        }

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

    render(): React.ReactNode {
        return (
            <div className='main-container'>
                <Logotype />
                <Layout>
                    {
                        [0, 1, 2, 3].map((i) => (
                            <Page
                                key={`page-${i}`}
                                className={`page-name-${i}`}
                                animationClass={this.state.animation[i]}
                                isPrevious={i === this.state.previousIndex}
                                isVisible={i === this.state.visibleIndex}
                            />
                        ))
                    }
                </Layout>
                <Footer onUpClick={this._onNavigationUpClick} onDownClick={this._onNavigationDownClick} />
            </div>
        );
    }
}
