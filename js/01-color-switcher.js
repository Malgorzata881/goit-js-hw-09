//funkcja wygenerowania losowego koloru
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

//funkcja zmieniająca tło
function zmianaKoloruTla(){

    document.body.style.backgroundColor=getRandomHexColor()
int= setTimeout(zmianaKoloruTla,1000)

}  

//wybór przycisków
const startButton =document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

//wlączanie przycisku start- dotyczy zmiany koloru
startButton.addEventListener('click',  function() {
    this.disabled=true            //przycisk start jest nieaktywny
    stopButton.disabled= false   //przycisk stop jest aktywny
     zmianaKoloruTla()
    }
    )
    
    //wlączanie przycisku stop
    stopButton.addEventListener('click',  function() {
        this.disabled=true            //przycisk stop jest nieaktywny
        startButton.disabled= false   //przycisk start jest aktywny
       clearTimeout(int)
        }
        )