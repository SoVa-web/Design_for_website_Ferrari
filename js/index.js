let menu = document.getElementById('menu')
let btn = document.getElementById('menu_btn')
btn.addEventListener("click", showMenu)
function showMenu(){
    console.log(111)
    let stringResult = ""
    stringResult = stringResult+'<ul id="menuContent">'
    +'<li><h1>About company</h1></li>'
    +'<li><h1>Catalog</h1></li>'
    +'<li><h1>News</h1></li>'
    +'<li><h1>Sign in</h1></li>'
    +'<li><h1>Sign up</h1></li>'
    +'<li><h1>Help</h1></li>'
    +'</ul> '
    menu.innerHTML = stringResult
}