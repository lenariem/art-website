const sliders = (slides, direction, prev, next) => {
    const items = document.querySelectorAll(slides);
    //active slide
    let slideIndex = 1;

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
};

export default sliders;