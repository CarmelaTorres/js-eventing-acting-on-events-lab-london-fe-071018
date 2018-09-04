var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink';

dodger.style.bottom = "0px";

function moveDodgerRight(e){
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerRight()
  }
} 

