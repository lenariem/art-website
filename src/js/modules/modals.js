const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if(destroy) {
                    item.remove();
                }

                //close all opened popups
                windows.forEach(item => {
                    item.style.display = 'none';
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        
        close.addEventListener('click', () => {
            //close all opened popups
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';
        });

        //close modal on click on screen
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                //close all opened popups
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
               /* document.body.classList.remove('modal-open'); */
               document.body.style.marginRight = '0px';
            }
        })

        // close modal on Esc key click
        document.addEventListener('keydown', e =>
        e.key === "Escape" ? modal.style.display = "none" : false
        );

    }

    //show modal on screen after some time
    function showModalByTime(selector, time) {
        setTimeout(() => {
            //do not show if any modal is already opened
            let display;
            document.querySelectorAll('[data-modal').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
           
        }, time);
    }

    //to fix bug with jumping window after modal shown
    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        //whole width - content width(not includes scroll)
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    //show modal gift if user scrolled to the end of a page and not pressed any button
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            //to support old browsers
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    openByScroll('.fixed-gift');

    showModalByTime('.popup-consultation', 5000); 

};

export default modals;