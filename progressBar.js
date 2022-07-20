function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${fill}0%`;
    progressBar.querySelector(".progress__text").textContent = `${value}/10`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  
  /* Example */
//   updateProgressBar(myProgressBar, 30);

  var answers = $('.quests').find('li');
  var value= 1;
  var fill = 0;
 

  answers.on('click', function(){
    updateProgressBar(myProgressBar, value++, fill++);
})