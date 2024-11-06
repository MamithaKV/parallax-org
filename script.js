const title = document.querySelector('.title');
const bg = document.querySelector('.bg');
const moon = document.querySelector('.moon');
const mountain = document.querySelector('.mountain');
const road = document.querySelector('.road');

document.addEventListener('scroll', function () {
    // Get the scroll value
    let value = window.scrollY;

    // Title moves slower
    title.style.transform = `translateY(${value * 0.5}px)`;

    // Background moves at a slower speed
    bg.style.transform = `translateY(${value * -0.3}px)`;  // Moves upward slowly

    // Moon moves horizontally (left or right)
    moon.style.transform = `translateX(${value * -0.5}px)translateY(0)`; // Moves left

    // Mountain moves slowly downward
    mountain.style.transform = `translateY(${value * 0.2}px)`; // Moves slowly down

    // Road moves more slowly
    road.style.transform = `translateY(${value * 0.1}px)`; // Moves slowly down
});
