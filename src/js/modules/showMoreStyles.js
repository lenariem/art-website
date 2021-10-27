//only with js and css
/* const showMoreStyles = (trigger, styles) => {
  const cards = document.querySelectorAll(styles);
  const btn = document.querySelector(trigger);

  cards.forEach( item => {
    item.classList.add("animated", "fadeInUp");
  });

  btn.addEventListener("click", () => {
    cards.forEach(item => {
      item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
      item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    });

    //to hide btn after click
    btn.style.display = 'none';
  });
};
 */

//with json-server

import { getResource } from "../services/requests";


const showMoreStyles = (trigger, styles) => {
  const cards = document.querySelectorAll(styles);
  const btn = document.querySelector(trigger);

  btn.addEventListener('click', () => {
    getResource('http://localhost:3000/styles')
      .then(res => console.log(res));
  });

  /* cards.forEach( item => {
    item.classList.add("animated", "fadeInUp");
  });

  btn.addEventListener("click", () => {
    cards.forEach(item => {
      item.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
      item.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
    });

    //to hide btn after click
    btn.style.display = 'none';
  }); */
};

export default showMoreStyles;
