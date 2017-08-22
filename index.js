/* jshint browserify: true */
var simulateProgress = require('simulate-progress');
function progressCallback(percent) {
  var element = document.querySelector('.progress');
  element.style.width = percent;
}

function finishCallback() {
  var element = document.querySelector('.loader');
  element.classList.addClass('finished');
}

function startSimulation() {
  var element = document.querySelector('.loader');
  element.classList.removeClass('finished');
}

function simulateProgress(progressCallback, finishCallback) {

}

startSimulation();