let navs = [...document.querySelectorAll('.nav-link')];
let sections = [...document.querySelectorAll('section')];
let first_section = document.location.href.split('#')[1];
navs.map(nav => change(nav));

starting(first_section);

function starting(first_section) {
    let current_section = document.querySelector(`[data-link=${first_section}]`)
    current_section.click();
}

function change(nav) {
    nav.addEventListener('click', activating);
}

function activating() {
    navs.map(nav => nav.classList.remove('active'));
    sections.map(section => section.classList.add('d-none'));
    let active_section = document.querySelector(`#${this.dataset.link}`);
    active_section.classList.remove('d-none');
    this.classList.add('active');
}


// typing effects
let typingEffect = (teks, i, teks_temp, timer) => {
    setTimeout(() => {
        document.getElementById("greet").innerHTML=teks_temp;
        console.log(teks_temp);
        if (teks_temp.length != teks.length) {
            teks_temp += teks.charAt(i++);
            typingEffect(teks, i, teks_temp, timer);
        }
    }, timer);
}


window.onload = function() {
    typingEffect("Hello There, my name is Amry Yahya, I am a student of Informatics Engineering at University of Brawijaya. Thanks for visiting my portfolio website :)", 0, "", 70);
};