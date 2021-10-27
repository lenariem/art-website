//with json-server

import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  //not arrow because of "this"
  btn.addEventListener("click", function() {
    getResource("http://localhost:3000/styles")
      .then((res) => createCards(res))
      .catch(error => console.log(error));

      //to delete btn after click
      this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {
      let card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
        <div class="styles-block">
          <img src=${src} alt=${title}>
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  }
};

export default showMoreStyles;


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

export default showMoreStyles;
 */
