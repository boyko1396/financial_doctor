// fullpage scroll init
document.addEventListener('DOMContentLoaded', function() {
    const layout = document.querySelector('body');
    const fullpageInstance = new fullpage('#fullpage', {
        css3: true,
        scrollingSpeed: 800,
        navigation: false,
        slidesNavigation: false,
        responsiveHeight: 330,
        controlArrows: false,
        fadingEffect: true,
        anchors: ['intro', 'intro-hero', 'services', 'meta', 'appeal', 'footer']
    });
});

//btn-toggle nav mobile
const btnToggle = document.querySelectorAll('.js-btn-toggle');

btnToggle.forEach((button) => {
    button.addEventListener('click', () => {
        const listCard = button.closest('.card');

        if (listCard) {
            listCard.classList.toggle('is-show');
        }
    });
});

// svg inline
document.addEventListener('DOMContentLoaded', function() {
    const svgContainers = document.querySelectorAll('.js-svg-inline');

    svgContainers.forEach(container => {
        const src = container.getAttribute('data-src');
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const svgText = xhr.responseText;
                    const wrapper = document.createElement('span');
                    wrapper.innerHTML = svgText.trim();

                    container.appendChild(wrapper.firstChild);
                } else {
                    console.error('Failed to load SVG:', src);
                }
            }
        };

        xhr.open('GET', src, true);
        xhr.send();
    });
});