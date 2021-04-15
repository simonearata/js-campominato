var totNumeri = 100;
var totBombe = 16;
var tot_tentativi = totNumeri - totBombe;
var arrBombe = bomb_16(totBombe, totNumeri);
var play_number = [];

console.log(arrBombe)

var gioco_finito = false;

while(gioco_finito === false){

  var numero = parseInt(prompt("Inserisci un numero"));

  if(play_number.includes(numero) === true){
    
    alert("il numero è già stato giocato");

  }else if(arrBombe.includes(numero) === true){
    
    alert("hai preso una bomba e hai fatto " + play_number.length + " tentativi");
    gioco_finito = true;

  }else if(numero > totNumeri){
    
    alert("inserisci un numero sotto " + totNumeri);
  
  }else if(numero < 1){
    
    alert("inserisci un numero superiore a 1");
  
  }else{
    
    play_number.push(numero);
    if(tot_tentativi === play_number.length){
      alert(" hai vinto");
      gioco_finito = true;
    }
  }
}




//FUNZIONI



//Il computer deve generare 16 numeri casuali tra 1 e 100 (le bombe)
function bomb_16 (nBomb, max){
  var arrBomb = [];

  while(arrBomb.length < nBomb){
    var bomba = rndNum(max);
    if(arrBomb.includes(bomba) === false){
      arrBomb.push(bomba);
    }
  }

  return arrBomb
}

//funzione che genera un numero casuale
function rndNum(max){
  
  return Math.floor(Math.random() * max) + 1
}