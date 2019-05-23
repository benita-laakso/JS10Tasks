!function(){// imidiatly invoced function expression
  var ball = document.getElementById('ball');
  //position for our 'ball'
  var x = 0;

  //start the animation interval
  var anim = setInterval(update, 30);

  function update() {
    if(x>=350){
  clearInterval(anim);
    }

    ball.style.left = x + "px";

    x++;

  }
}();
