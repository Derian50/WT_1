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

//

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}
contactChoiceCookie1 = document.getElementById("contactChoiceCookie1")
contactChoiceCookie2 = document.getElementById("contactChoiceCookie2")
contactChoiceCookie3 = document.getElementById("contactChoiceCookie3")
contactChoiceCookie4 = document.getElementById("contactChoiceCookie4")

if(getCookie("ccc1") == "false"){
    contactChoiceCookie1.checked = false
    document.getElementsByClassName("jsblock")[0].hidden = true;
}
if(getCookie("ccc2") == "false"){
    contactChoiceCookie2.checked = false
    document.getElementsByClassName("jsblock")[1].hidden = true;
} 
if(getCookie("ccc3") == "false"){
    contactChoiceCookie3.checked = false
    document.getElementsByClassName("jsblock")[2].hidden = true;
} 
if(getCookie("ccc4") == "false"){
    contactChoiceCookie4.checked = false
    document.getElementsByClassName("jsblock")[3].hidden = true;
} 
contactChoiceCookie1.addEventListener('change', function(){
    setCookie("ccc1", contactChoiceCookie1.checked, {})
    if(contactChoiceCookie1.checked == false){
        document.getElementsByClassName("jsblock")[0].hidden = true;
    }else{
        document.getElementsByClassName("jsblock")[0].hidden = false;
    }
})
contactChoiceCookie2.addEventListener('change', function(){
    setCookie("ccc2", contactChoiceCookie2.checked, {})
    if(contactChoiceCookie2.checked == false){
        document.getElementsByClassName("jsblock")[1].hidden = true;
    }else{
        document.getElementsByClassName("jsblock")[1].hidden = false;
    }
})
contactChoiceCookie3.addEventListener('change', function(){
    setCookie("ccc3", contactChoiceCookie3.checked, {})
    if(contactChoiceCookie3.checked == false){  
        document.getElementsByClassName("jsblock")[2].hidden = true;
    }else{
        document.getElementsByClassName("jsblock")[2].hidden = false;
    }
})
contactChoiceCookie4.addEventListener('change', function(){
    setCookie("ccc4", contactChoiceCookie4.checked, {})
    if(contactChoiceCookie4.checked == false){
        document.getElementsByClassName("jsblock")[3].hidden = true;
    }else{
        document.getElementsByClassName("jsblock")[3].hidden = false;
    }
})

//

cvs = document.getElementById("canvas")
ctx = cvs.getContext("2d")

var colCount = 0
btnCanvas = document.getElementById("btnCanvas")
btnCanvas.addEventListener('click', function(){
    colCount = document.getElementById("colCount").value
    drawDiagram(colCount)
})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


var drawDiagram = function(col){
    ctx.clearRect(0,0,500,150)
    ctx.fillStyle = "#9F2B68"
    for(var i = 0; i < col; i++){
        randY = getRandomArbitrary(10,140)
        ctx.fillRect(4*i + (500/col * i), randY, 500/col, 150-randY)
    }
}
