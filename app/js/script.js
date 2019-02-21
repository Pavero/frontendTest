window.onload = function () {
    const carousel = new Carousel();
    console.log(1);
}

function Carousel(delay) {
    const carousel = document.querySelector(".carousel");
    let currentSlide = 0;

    const container = (() => {
        let container = carousel.querySelector(".carousel__container");
        container.els = container.querySelectorAll(".carousel__element");
        container.scroll = (index) => {
            $(container).animate({
                scrollLeft: container.els[0].scrollWidth * index
            }, 200)
        }
        return container
    })();

    const nav = (() => {
        let nav = carousel.querySelector(".nav");
        nav.items = nav.querySelectorAll(".nav__item");
        [].forEach.call(nav.items, (item, i) => {
            item.onclick = () => {
                container.scroll(i)
                nav.items[currentSlide].classList.toggle("--active");
                currentSlide = i;
                nav.items[currentSlide].classList.toggle("--active");
            }
        })
        return nav;
    })();

    const arrows = (() => {
        let arrows = {
            left: carousel.querySelectorAll(".carousel__arrow")[0],
            right: carousel.querySelectorAll(".carousel__arrow")[1]
        }
        arrows.left.onclick = () => {
            if (currentSlide < 1) {
                nav.items[container.els.length - 1].click()
            } else {
                nav.items[currentSlide - 1].click()
            }
        }
        arrows.right.onclick = () => {
            if (currentSlide > container.els.length - 2) {
                nav.items[0].click();
            } else {
                nav.items[currentSlide + 1].click()
            }
        }
        return arrows;
    })();
}

