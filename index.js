/* jshint browserify: true */
var simulateProgress = require('simulate-progress');
var element;
var buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
  button.addEventListener('click', function(){
     
console.log(this.parentNode);

element = this.parentNode.childNodes[1];
     startSimulation();
  });
});





function progressCallback(percent) {
  
  element.style.width = percent + "%";
}

function finishCallback() {
  
  element.classList.add('finished');
}

function startSimulation() {
  
  element.classList.remove('finished');
  simulateProgress(progressCallback, finishCallback);
}

function simulateProgress(progressCallback, finishCallback) {

}


