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



