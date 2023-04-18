const INCREMENT = 'INCREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
const DECREMENT = 'DECREMENT';
const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

const increment = () => ({type: INCREMENT});
const incrementAsync = () => ({type: INCREMENT_ASYNC});
const decrement = () => ({type: DECREMENT});
const decrementASYNC = () => ({type: DECREMENT_ASYNC});

export {
    INCREMENT,
    DECREMENT,
    INCREMENT_ASYNC,
    DECREMENT_ASYNC,
    increment,
    incrementAsync,
    decrement,
    decrementASYNC
}
