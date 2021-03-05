
// HIDE ALL FILE FROM BROWSER 
  function disableRightClick() {
        alert("Sorry, right click is not allowed !!");
        return false;
      } 
       document.onkeydown = function (e) {
          if (e.keyCode == 123) {
            return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
          }
          if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
          }
          if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
          }

          if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
          }
        }

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});





