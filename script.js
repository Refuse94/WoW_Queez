(function($){

console.log('počujeme sa? ');

var quests = $('.quests').find('div');
quests.addClass('hide');
quests.eq(0).removeClass('hide');
var selected = $('.quests').find('.selected');
var li = $('.quests').find('li');
var liScore =li.attr('data-index-number');




li.on('click', function(){
    schovaj();
    console.log(li.attr('data-index-number')); // Nerozumiem, prečo keď kliknem na iný "li" element, tak vypisuje stále hodnotu prvého.
    console.log(li.attr('data-value'));
})

function schovaj (){
    selected.addClass('hide');
    var nextSelected = selected.next();
    selected = nextSelected;
    selected.addClass('selected').siblings().removeClass('selected');
    selected.removeClass('hide');
}



// const events = document.querySelector('.quests');
// events.forEach(e => {
//     console.log(e);
    
// })


function score(a, b) {
    return (Math.abs(a+b));
  }
  
  console.log(score(5, 5));
  

  function dataScore (score, liScore ) {
    return (Math.abs(score + liScore));
  }

  console.log(dataScore);


  var amNew = $('<div/>').html('SCORE');      
      amNew.appendTo('footer');

// var intiger = 10;
// intiger.appendTo('footer');







const startingMinuites = 10;
let time = startingMinuites *60;
const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes =Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML= '${minutes}: ${seconds}';
    time--;
}














// var id = container.find('id');

// console.log(id);

// container.find('li').on('click', function(){
//     container.addClass('hide');
//     var nextId = id.next();
    
// })



})(jQuery);