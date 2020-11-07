let menu = document.getElementById('menu')

let btn = document.getElementById('menu_btn')
btn.addEventListener("click", showMenu)

let close = document.getElementById('close_btn')
close.addEventListener("click", closeMenu)
close.hidden = true

let u = document.getElementById('menuContent')
u.hidden = true

let call = document.getElementById('call')
let state = true
call.addEventListener("click", rotate)

function rotate(){
    if(state===true){
       document.querySelector("#imgCall").classList.toggle("callLeft");
       document.querySelector("#imgCall").classList.remove("callRight");
       state=false
    }else{
       document.querySelector("#imgCall").classList.remove("callLeft");
       document.querySelector("#imgCall").classList.toggle("callRight");
       state = true
    }
}

function showMenu(){
    u.hidden = false
    close.hidden = false
    btn.hidden  = true
    document.querySelector(".navbarMenu").classList.toggle("navbarMenu-show");
    document.querySelector(".navbarMenu").classList.remove("navbarMenu-close");
}

function closeMenu(){
    close.hidden = true
    btn.hidden  = false
    document.querySelector(".navbarMenu").classList.toggle("navbarMenu-close");
    document.querySelector(".navbarMenu").classList.remove("navbarMenu-show");
   
}