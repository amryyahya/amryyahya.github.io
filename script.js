let navs = [...document.querySelectorAll('.nav-link')];
let sections = [...document.querySelectorAll('section')];
let first_section = document.location.href.split('#')[1];
navs.map(nav => change(nav));

// typing effects
let typingEffect = (teks, i, teks_temp, timer) => {
    setTimeout(() => {
        let element=document.getElementById("greet");
        element.innerHTML=teks_temp;
        //curseor effect
        if (teks_temp!=teks)element.textContent+="|";
        if (teks_temp.length != teks.length) {
            teks_temp += teks.charAt(i++);
            typingEffect(teks, i, teks_temp, timer);
        }
    }, timer);
}

// process image
let addImage = async () => {
    let educationImage = ['sd.jpg','smp.jpg','sma.jpeg','kuliah.webp'];
    let educationId= ['sd','smp','sma','kuliah'];
    for (let i=0;i<educationImage.length;i++){
        document.getElementById(educationId[i]).src="resources/"+educationImage[i];
    }
}


window.onload = function() {
    typingEffect("Hello There, my name is Amry Yahya, I am a student of Informatics Engineering at University of Brawijaya. Thanks for visiting my portfolio website :)", 0, "", 70);
    starting(first_section);
    addImage();
};


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


