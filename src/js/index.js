import '@babel/polyfill';
import './import/modules';
import './import/components';
/*
 * Chunks
 */
import {
  DropdownConstructor
} from './import/chunks/dropdown/dropdown.js';
import {
  User
} from '%ui%/es6-class';
import {
  DOM
} from '%ui%/dom-creator';

document.addEventListener('DOMContentLoaded', () => {
  const dropDown = new DropdownConstructor('[data-component="dropdown-1"]');

  const h1 = DOM.create('h1');
  // h1.setSize('10px', '20px')
  //   .text('Hello!!!')
  //   .attr('disabled', false)
  //   .css(
  //     {fontSize: '30px',
  //      padding: '20px',
  //      color: 'green'});

  // console.log(h1);

  const elms = DOM.createMany('p', 'input', 'button');

  elms.forEach(item => {
    item.setSize('40px', '20px')
      .text('Homework!!!')
      .attr('disabled', true)
      .css({
        fontSize: '30px',
        padding: '20px',
        color: 'green'
      });
  });

  console.log(elms);
});