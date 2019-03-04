const SIZES = {
    xxlarge: 'xx-large',
    xlarge: 'x-large',
    large: 'large',
    medium: 'medium',
    small: 'small'
};
const WEIGHTS = {
    bold: 'bold',
    normal: 'normal',
    thin: 'this'
};

const COLORS = {
    white: 'white',
    black: 'black'
};

const VERTICAL_ALIGN = {
    bottom: 'vertical-align_bottom',
    middle: 'vertical-align_middle'
};

export default (data) => {
    const {size, weight, color, verticalAlign} = data;
    return [
        `text-${SIZES[size] || SIZES.medium}`,
        `text-${WEIGHTS[weight] || WEIGHTS.normal}`,
        `text-${COLORS[color] || WEIGHTS.black}`,
        verticalAlign ? `text-${VERTICAL_ALIGN[verticalAlign]}` : ''
    ].join(' ');
};
