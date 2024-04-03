// // Typing script js
var typed = new Typed(".typing",{
    strings: ["web development", "laravel development", "javascript"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Lraavel Developer", "Javascript"],
    typeSpeed: 100,
    backSpeed: 60,
});

// Show/hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_menu');
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');

    menuBtn.addEventListener('click', () => {
        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none";
    });


// Close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav); 
});

// nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.
    toggle('window-scroll', window.scrollY>100);
})
