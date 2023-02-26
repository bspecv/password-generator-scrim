const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];




let gen1Pw = document.getElementById("gen1")
let gen2Pw = document.getElementById("gen2")

let maxCharacters = 15

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


 function passWordGen () {
    let passWord1= ""
    let passWord2= ""
    for (let i =0; i < maxCharacters; i ++) {   
    passWord1 += getRandomCharacter()
    passWord2 += getRandomCharacter()
    
   }
        
    gen1Pw.textContent = passWord1
    gen2Pw.textContent = passWord2
    
 }
 


