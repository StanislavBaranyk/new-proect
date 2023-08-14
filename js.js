var slider = tns({
    container: "#base",
    items: 3,
    speed: 500,
    slideBy: 1,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        700: {
            fixedWidth: 400,
            gutter: 50,
        },
        1000: {

        }
    },
});
slider.goTo(3);


let testimonial = document.querySelector('.testimonial');
let testimonialCol = document.querySelector('.testimonial-col');


console.log(testimonialCol.classList)

if (testimonialCol.classList.contains('tns-slide-active')) {
    console.log(true)
} else {
    console.log(false)
}

// let testimonials = document.getElementById('testimonials');
// testimonials.addEventListener('click', ()=> {
//     console.log(slider.getInfo())
// })


let divContainer = document.createElement('div');
divContainer.classList.add('container');

let tnsControls = document.querySelector('.tns-controls');
let tnsNav = document.querySelector('.tns-nav');

divContainer.appendChild(tnsNav);
divContainer.appendChild(tnsControls);

let tnsOuter = document.querySelector('.tns-outer');
tnsOuter.insertAdjacentElement('afterend', divContainer);


let smallNavContainer = document.getElementById('small-nav-container');

let smallNavButton = document.getElementById('activated-small-nav');

let smallHeader = document.getElementById('small-header');

smallNavButton.addEventListener('click', () => {
    if (smallNavButton.classList.contains('activated-nav')) {

        smallNavContainer.innerHTML = `
        <ul>
    <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#features">Features</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#pricing">Pricing</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#testimonials">Testimonials</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#help">Help</a>
    </li>
</ul>
<ul class="ul-last">
    <li>
        <a href="#signin">Sign In</a>
    </li>
    <li>
        <a href="#signup">Sign Up</a>
    </li>
</ul>

<div class="small-nav-bottom">
    <a href="https://www.facebook.com/" target="_blank">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="#fff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
    </a>
    <a href="https://www.twitter.com/" target="_blank">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#fff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
    </a>
    <a href="https://www.instagram.com/" target="_blank">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
    </a>
</div>
        `;
        smallNavContainer.classList.add('small-nav-activated');

        smallNavButton.classList.remove('activated-nav');
        smallNavButton.classList.add('stop-nav')

        document.body.classList.add('overflow-h');
    } else if (smallNavButton.classList.contains('stop-nav')) {

        smallNavContainer.classList.remove('small-nav-activated')

        smallNavButton.classList.remove('stop-nav');
        smallNavButton.classList.add('activated-nav')

        document.body.classList.remove('overflow-h');


    }
})


// plans
let freePlan = document.getElementById('free-plan');
let freePlanBtn = document.getElementById('free-plan-btn');
freePlanBtn.addEventListener('click', () => {
    if (freePlan.classList.contains('activated-col')) {

        freePlan.classList.remove('activated-col')

        freePlan.style.border = '2px solid #f53838';

        freePlan.classList.add('stop-col');
    } else if (freePlan.classList.contains('stop-col')) {
        freePlan.classList.remove('stop-col');

        freePlan.style.border = '2px solid #dddddd';

        freePlan.classList.add('activated-col');

    }
})

let standardPlan = document.getElementById('standard-plan');
let standardPlanBtn = document.getElementById('standard-plan-btn');
standardPlanBtn.addEventListener('click', () => {
    if (standardPlan.classList.contains('activated-col')) {

        standardPlan.classList.remove('activated-col')

        standardPlan.style.border = '2px solid #f53838';

        standardPlan.classList.add('stop-col');
    } else if (standardPlan.classList.contains('stop-col')) {
        standardPlan.classList.remove('stop-col');

        standardPlan.style.border = '2px solid #dddddd';

        standardPlan.classList.add('activated-col');

    }
})

let premiumPlan = document.getElementById('premium-plan');
let premiumPlanBtn = document.getElementById('premium-plan-btn');
premiumPlanBtn.addEventListener('click', () => {
    if (premiumPlan.classList.contains('activated-col')) {

        premiumPlan.classList.remove('activated-col')

        premiumPlan.style.border = '2px solid #f53838';

        premiumPlan.classList.add('stop-col');
    } else if (premiumPlan.classList.contains('stop-col')) {
        premiumPlan.classList.remove('stop-col');

        premiumPlan.style.border = '2px solid #dddddd';

        premiumPlan.classList.add('activated-col');

    }
})

