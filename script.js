(function($){

console.log('počujeme sa? ');

var quests = $('.quests').find('div');
quests.addClass('hide');
quests.eq(0).removeClass('hide');
var selected = $('.quests').find('.selected');
var li = $('.quests').find('li');


quests.find('li').on('click', function(){
    schovaj();
    console.log(li.attr('data-index-number'));
   
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


















// var id = container.find('id');

// console.log(id);

// container.find('li').on('click', function(){
//     container.addClass('hide');
//     var nextId = id.next();
    
// })



})(jQuery);