


// navbar
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

document.getElementById('menu-toggle').addEventListener('click',function (){
    var nav = document.getElementById('menu');
    if (nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
        nav.style.display = 'block';
        disableScroll();
    }
    else{
        nav.classList.add('hidden');
        nav.style.display = 'none';
        enableScroll();
    }
});



// preloader

let loader = document.querySelector(".preloader");
let content = document.querySelector(".navbar");


window.addEventListener("load", () => {
    setTimeout(() => {

        loader.style.display = "none";
        content.style.display = "block"

    }, 2000)
})

