(function($){

console.log('počujeme sa? ');

var quests = $('.container').find('div');
quests.addClass('hide');
quests.eq(0).removeClass('hide');
var selected = $('.container').find('.selected');


quests.find('li').on('click', function(){
    selected.addClass('hide');
    var nextSelected = selected.next();
    selected = nextSelected;
    selected.addClass('selected').siblings().removeClass('selected');
    selected.removeClass('hide');
})























// var id = container.find('id');

// console.log(id);

// container.find('li').on('click', function(){
//     container.addClass('hide');
//     var nextId = id.next();
    
// })



})(jQuery);