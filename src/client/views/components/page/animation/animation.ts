const PREFIX = 'page_animate-';

export default (isDown, pageIndex, showPageIndex, hidePageIndex) => {
    const postfixDirection = isDown ? 'up' : 'down';

    if (pageIndex === showPageIndex) {
        return `${PREFIX}show-${postfixDirection}`;
    }

    if (pageIndex === hidePageIndex) {
        return `${PREFIX}hide-${postfixDirection}`;
    }

    return '';
};
