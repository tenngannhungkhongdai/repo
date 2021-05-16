document.getElementById('gameforfun').addEventListener('click',color)
function maudo(){document.body.style.backgroundColor = "red"}
function mauxanh(){document.body.style.backgroundColor = "blue"}
function mauvang(){document.body.style.backgroundColor = "yellow"}
function color(){
    let a = Math.floor(Math.random()*3)
    if(a==0){maudo()}
    if(a==1){mauxanh()}
    if(a==2){mauvang()}
} 
