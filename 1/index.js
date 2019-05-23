
let index = 0;
//setInterval does somthing again and again
setInterval (function (){
if (index <=99){
  index++;
  console.log(index);
} else{
  index =0;
}

},120); // setInterval amout of time

console.log(index);
