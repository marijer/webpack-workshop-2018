import nav from './nav';
import {footer} from './footer';
import makeButton from './button';
import makeImage from './image';
import imageUrl from './icon.jpg';

import {makeColorStyle} from './button-styles';
 
const button = makeButton('test');
button.style = makeColorStyle('red')
document.body.appendChild(button);

document.body.appendChild(footer);

const image = makeImage(imageUrl);
document.body.appendChild(image);

console.log(nav());
console.log(makeColorStyle('mustard'))