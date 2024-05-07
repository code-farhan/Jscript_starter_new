import numeral from 'numeral';
import './index.css';

/* eslint-disable no-console */

const starterValue = numeral(1000).format('$0,0.00');

// back ticks to parse variables inside strings
// debugger;
console.log(`I would pay ${starterValue} for this awesome starter pack!`);
