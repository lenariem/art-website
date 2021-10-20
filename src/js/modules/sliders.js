const sliders = (slides, direction, prev, next) => {
    const items = document.querySelectorAll(slides);
    //active slide
    let slideIndex = 1;
    let paused = false;

    function showSlides(n) {
        if(n > items.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = items.length;
        }

        items.forEach (item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex -1].classList.remove('slideInLeft');
            items[slideIndex -1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex -1].classList.remove('slideInRight');
            items[slideIndex -1].classList.add('slideInLeft');
        });

    } catch(err) {
        console.log(err);
    }

    function activateAnimation() {
        if(direction === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex -1].classList.add('slideInDown');
            }, 5000);
        } else {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex -1].classList.remove('slideInRight');
                items[slideIndex -1].classList.add('slideInLeft');
            }, 5000);
        }
    }
    activateAnimation();

    //to stop auto switch in slider if user point on slider
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

    
};

export default sliders;