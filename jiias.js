var coins = 0;
var coinsPS = 0;
var coinsPC = 1;



function gainCoin() {

coins += coinsPC;

}



setInterval(function renderCoins() {

document.getElementById("coins").innerHTML = "Coins: " + coins;

})


setInterval(function renderCoinsPS() {

document.getElementById("coinsPS").innerHTML = "Kolikeita per sekuntti " + 
coinsPS;

})

function getCoinsPS(){

if (coins >= 50){
coinsPS += 1;
coins -= 50;

}
else{
alert("Sinulla ei ole riittävästi kolikoita")
}
setInterval(function coinPS(){

coins += coinsPS;

}, 1000)

}


function showPicture() {
 if (coins <=100 ) return 1;
 coins -= 100;
    var sourceOfPicture = "hattu.png";
    var img = document.getElementById('hattu')
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
   
  } 

  function showPicture1() {
     if (coins <=500) return 1;
     coins -= 500;
       var sourceOfPicture = "juoma.png";
       var img = document.getElementById('kalja')
       img.src = sourceOfPicture.replace('90x90', '225x225');
       img.style.display = "block";
      
     } 
   


     function showPicture2() {
        if (coins <=1000) return 1;    
        coins -= 1000;      
           var sourceOfPicture = "viikset.png";
           var img = document.getElementById('viikset')
           img.src = sourceOfPicture.replace('90x90', '225x225');
           img.style.display = "block";
          
         } 


         
       
    