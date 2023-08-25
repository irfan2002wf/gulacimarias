// nav
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('nav-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('nav-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// ham
const hum = document.querySelector('#hum');
const navMenu = document.querySelector('#nav-menu');

hum.addEventListener('click', function(){
    hum.classList.toggle('hum-active');
    navMenu.classList.toggle('hidden');
});

// click
window.addEventListener('click', function(e){
    if(e.target !=hum && e.target !=navMenu){
        hum.classList.remove('hum-active');
    navMenu.classList.add('hidden');
    }
})

// darkmode
const darkToogle = document.querySelector('#dark-toogle');
const html = document.querySelector('html');

darkToogle.addEventListener('click', function(){
    if(darkToogle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToogle.checked = true;
} else {
    darkToogle.checked = false;
}