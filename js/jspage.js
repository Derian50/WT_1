contactChoice1 = document.getElementById("contactChoice1")
contactChoice2 = document.getElementById("contactChoice2")
contactChoice3 = document.getElementById("contactChoice3")

for(var key in localStorage){
    
    if(key == "contactChoice1"){
        if(localStorage.getItem(key) == "true"){
            contactChoice1.checked = true
        }else{
            contactChoice1.checked = false
        }
    }
    if(key == "contactChoice2"){
        if(localStorage.getItem(key) == "true"){
            contactChoice2.checked = true
        }else{
            contactChoice2.checked = false
        }
    }
    if(key == "contactChoice3"){
        if(localStorage.getItem(key) == "true"){
            contactChoice3.checked = true
        }else{
            contactChoice3.checked = false
        }
    }
}
contactChoice1.addEventListener('change', function(){
    localStorage.setItem("contactChoice1", contactChoice1.checked)
})
contactChoice2.addEventListener('change', function(){
    localStorage.setItem("contactChoice2", contactChoice2.checked)
})
contactChoice3.addEventListener('change', function(){
    localStorage.setItem("contactChoice3", contactChoice3.checked)
})

///

darkTheme = false;
changeThemeButton = document.getElementById('changeTheme')
changeThemeButton.addEventListener('click', function(){
    darkTheme = !darkTheme
    console.log("changeTheme")
    if(darkTheme){
        document.getElementById('main').style.backgroundImage="url(../images/shapka_dark.png)" 
    }else{
        document.getElementById('main').style.backgroundImage="url(../images/shapka.png)" 
    }
})
hiddenBlock = document.getElementById('hiddenBlock')
hiddenBlock.addEventListener('click', function(){
    hiddenBlock.hidden = true
})

///

numberInput = document.getElementById('numberInput') 
numberInput.addEventListener('change', function(){
    console.log(numberInput.checked)
    document.getElementById('number').hidden = false;
    document.getElementById('mail').hidden = true;
})
mailInput = document.getElementById('mailInput') 
mailInput.addEventListener('change', function(){
    console.log(mailInput.checked)
    document.getElementById('number').hidden = true;
    document.getElementById('mail').hidden = false;
})
nothingInput = document.getElementById('nothingInput') 
nothingInput.addEventListener('change', function(){
    console.log(nothingInput.checked)
    document.getElementById('number').hidden = true;
    document.getElementById('mail').hidden = true;
})
selectInput = document.getElementById('selectInput')
selectInput.addEventListener('change',function(){
    console.log(selectInput.selectedIndex)
    if(selectInput.selectedIndex != 0){
        document.getElementById("quest").hidden = false
    }else{
        document.getElementById("quest").hidden = true
    }
})
submitButton = document.getElementById('submit')
submitButton.addEventListener('click',function(){
    console.log(document.getElementById('number').value)
    console.log(document.getElementById('mail').value)
    console.log(document.getElementById('textarea').value)
    document.getElementById("result").innerHTML = "Ура-ура, мы получили обратную связь от вас!"
    if(document.getElementById('number').hidden == false) document.getElementById("result").innerHTML += " Мы ответим вам по номеру телефона " +  document.getElementById('number').value
    if(document.getElementById('mail').hidden == false) document.getElementById("result").innerHTML += " Мы ответим вам по почте " +  document.getElementById('mail').value
})

///

function f(a){
    document.images[1].src = document.images[a].src;

}
id = null;
a=2;
function f1()
{
    document.images[1].src = document.images[a].src;
    document.images[a].classList.toggle("b");
    if(a!=2){
        document.images[a-1].classList.toggle("b");
    }
    else{
        if(document.images[4].classList.contains('b')){
        document.images[4].classList.toggle("b");
        }
    }
    if(a==4){
        a=1;
    }
    a=a+1;
    id = setTimeout("f1()", 1000);
   
    
}

function stop()
{
    clearTimeout(id);   
}
