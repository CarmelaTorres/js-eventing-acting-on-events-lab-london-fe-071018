var dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var leftNumbers = dodger.style.right.replace('px', '')
  var left = parseInt(leftNumbers, 10)
   if (left > 0) {
    dodger.style.left = `${right - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerRight()
  }
}
