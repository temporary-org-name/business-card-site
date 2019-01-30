const SIZES = {
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

export default (data) => {
    const {size, weight} = data;
    return `text-${SIZES[size] || SIZES.medium} text-${WEIGHTS[weight] || WEIGHTS.normal}`;
};