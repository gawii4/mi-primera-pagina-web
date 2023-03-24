const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<ion-icon name='menu-outline'></ion-icon>";
    }
    else{
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<ion-icon name='close-outline'></ion-icon>";
    }
}

toggle.addEventListener('click', toggleMenu, false)


 