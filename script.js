(function($){

var quests = $('.quests').find('div');
quests.addClass('hide');
quests.eq(0).removeClass('hide');

var selected = $('.quests').find('.selected');
var li = $('.quests').find('li');
var liScore =li.attr('data-index-number');  // pokus o vytiahnutie data atributu

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
// =================== Asi iba po tialto to funguje xD ====================


// ============== toto malo tiež vytiahnuť data atribut ale nejako nefungoval forEach =============

// const events = document.querySelector('.quests');
// events.forEach(e => {
//     console.log(e);
    
// })

// ============================  Skusanie si math operácie a ako to vlastne funguje, / snaha o prirátanie data atributu k vytvorenému atributu v premennej ==============
function score(a, b) {
    return (Math.abs(a+b));
  }
  
  console.log(score(5, 5));
  

  function dataScore (score, liScore ) {
    return (Math.abs(score + liScore));
  }

  console.log(dataScore);

// =====================================Vytvorenie SCORE DIVU ktorý sa zobrazí na konci , chcem ho potom naštýlovať na poslednej stránke  ktorá sa zobrazí a nejak naň naviazať ten
// =======================================      neexistujúci prepočet čo možno niekedy vznikne       ===================================================================


  var amNew = $('<div/>').html('SCORE');      
      amNew.appendTo('footer');

// var intiger = 10;
// intiger.appendTo('footer');




//========= keď mi ešte nefungoval slider na otázky, tak som sa snažil nejako získať cez html idčko každej otázky a slidovať to cez to idčko , / = nedokázal som získať idčko =====


// var id = container.find('id');

// console.log(id);

// container.find('li').on('click', function(){
//     container.addClass('hide');
//     var nextId = id.next();
    
// })



})(jQuery);