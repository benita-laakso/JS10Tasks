
let index=1;

setInterval (function(){
if (index < 4){
  index ++;
}else{
  index = 1;
}



document.getElementById("demo").style.backgroundImage = "url(runner/runner" + index +".png)";
},60);

//Url normaly  "url(runner/runner.png)" Url cut into pices  "url(runner/runner" + index +".png)"
