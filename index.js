var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink';

function moveDodgerRight() {
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
   if (left > 0) {
    dodger.style.left = `${right - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerRight()
  }
} 

