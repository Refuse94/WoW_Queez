function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${fill}1%`;
    progressBar.querySelector(".progress__text").textContent = `${value}/10`;
  }
  
  const myProgressBar = document.querySelector(".progress");
  
  /* Example */
//   updateProgressBar(myProgressBar, 30);

  var li = $('.quests').find('li');
  var value= 1;
  var fill = 1;
 

  li.on('click', function(){
    updateProgressBar(myProgressBar, value++, fill++);
})