document.addEventListener("click", function(){
   const dice = document.getElementById("dice-btn");
   let randomNum = Math.floor(Math.random()*6)+1;
    let randomImageSrc = 'images/dice' + randomNum + '.png';
   document.querySelectorAll('img')[0].setAttribute('src', randomImageSrc);
   
   let randomNum2 = Math.floor(Math.random()*6)+1;
    let randomImageSrc2 = 'images/dice' + randomNum2 + '.png';
   document.querySelectorAll('img')[1].setAttribute('src', randomImageSrc2);
    if(randomNum > randomNum2) {
       document.querySelector('h1').innerHTML = '	&#128681 Dj Ramirez win';
    } else if (randomNum2 > randomNum){
       document.querySelector('h1').innerHTML = '	&#128681 Fabrice911 win';
    } else {
       document.querySelector('h1').innerHTML = '	&#128681 Draw !!! &#128681';
    }

})